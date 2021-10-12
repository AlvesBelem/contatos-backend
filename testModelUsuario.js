const { Usuario, sequelize } = require('./database/models');

Usuario.findByPk(1, {include:['contatos','colegas']}).then(
  u => {
    console.log(u.toJSON());
    sequelize.close();
  }
);

// Usuario.findAll().then(
//   usuarios => console.log(usuarios.map(u => u.toJSON()))
// )

// Usuario.create({nome:"Iago", email:"iago@dh.com", senha:"segredo"});
//     () => {
//       Usuario.findAll().then(
//         usuarios => console.log(usuarios.map(u => u.toJSON()))
//       )
//     }

  
    