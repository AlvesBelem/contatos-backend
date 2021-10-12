const { Telefone, sequelize } = require('./database/models');

Telefone.create({numero:"11 9 99999999", contatos_id:2}).then(
  tel => {
    console.log(tel.toJSON());
    sequelize.close()
  }
)

