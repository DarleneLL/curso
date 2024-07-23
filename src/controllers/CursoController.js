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

}

module.exports = new CursoController()