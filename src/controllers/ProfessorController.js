const Professor = require("../models/professor")


class ProfessorController {

    async criar(request, response) {
        try {
            const dados = request.body
            const professor = await Professor.create(dados)

            response.status(201).json(professor)
        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao cadastrar o professor'
            })
        }
    }
    async listaTodos(request, response) {
        try {
            const { nome } = request.query

            const professores = await Professor.findAll()

            if(professores.length === 0) {
                response.status(404).json({ mensagem: 'Não foi encontrado nenhum professore' })
            }

            response.json(professores)
        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao listar os professor'
            })
        }
    }

    async atualizar(request, response) {
        try {
            const id = request.params.id
            const dados = request.body

            const professor = await Professor.findByPk(id)

            if (!professor) {
                response
                    .status(404)
                    .json({ mensagem: 'Não foi encontrado o professor' })
            }

            professor.nome = dados.nome
            professor.idade = dados.idade
            professor.email = dados.email
            await professor.save()

            response.json(professor)

        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao atualiza o professor'
            })
        }
    }
    async deletar(request, response) {
        try {
            const id = request.params.id
            const professor = await Professor.findByPk(id)

            if (!professor) {
                response
                    .status(404)
                    .json({ mensagem: 'Não foi encontrado o professor' })
            }

            await professor.destroy()

            response.status(204).json()

        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao deletar o professor'
            })
        }
    }
}

module.exports = new ProfessorController()