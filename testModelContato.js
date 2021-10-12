const {Contato, sequelize} = require('./database/models');

Contato.findByPk(1,{include:['telefones','usuario']}).then(
  c => {
    console.log(c.toJSON());
    sequelize.close();
  }
)

// async function teste(){
//   let resultado = await Contato.create({nome:"Marcelo",email:"marcelo@teste.com.br",usuarios_id:1});
//   let contatos = await Contato.findAll();
//   console.log(contatos.map(c=>c.toJSON()));
//   Contato.close()
// }
// teste();