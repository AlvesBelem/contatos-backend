// importado sequilize e querytypes tipos de consultas
const { Sequelize, QueryTypes } = require('sequelize')

// importar as configurações
const config = require('./database/config/config.json').development

// criando a minha conexão com o banco de dados
const conexao = new Sequelize(config)

//executar consulta teste
conexao
  .query('select * from usuarios', { type: QueryTypes.SELECT })
  .then(dados => {
    console.log(dados)
    conexao.close()
  })
