'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('usuarios', [
      {
        id: 1,
        email: 'ssiqueira@digitalhouse.com',
        senha: bcrypt.hashSync('123456', 10),
        nome: 'Ségio Moura'
      },
      {
        id: 2,
        email: 'iago@digitalhouse.com',
        senha: bcrypt.hashSync('123456', 10),
        nome: 'Iago Nunes'
      },
      {
        id: 3,
        email: 'marcelo@goolge.com',
        senha: bcrypt.hashSync('123456', 10),
        nome: 'Marcelo Alves'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('usuarios', null, {});
  }
};
