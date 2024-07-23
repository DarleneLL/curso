const Curso = require("../models/curso")


class CursoController {

    async criar(request, response) {
        try {
            const dados = request.body
            /* validacao */
            const curso = await Curso.create(dados)

            response.status(201).json(curso)
        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao cadastrar o curso'
            })
        }
    }

    async listaTodos(request, response) {
        try {
            const cursos = await Curso.findAll()

            if(cursos.length === 0) {
                response.status(404).json({ mensagem: 'Não foi encontrado nenhum curso' })
            }

            response.json(cursos)
        } catch (error) {
            response.status(500).json({
                mensagem: 'Houve um erro ao listar os curso'
            })
        }
    }

}

module.exports = new CursoController()