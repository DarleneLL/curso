const { DataTypes } = require('sequelize')
const connection = require('../database/connection')

const Professor = connection.define("professores", {
      nome: {
        type: DataTypes.STRING
      },
      idade: {
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING
      },
})

module.exports = Professor