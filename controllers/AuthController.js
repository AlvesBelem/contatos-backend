const { Usuario } = require('../database/models');
const bcrypt = require('bcrypt');




module.exports = {
  registrar: async (req, res) => {

    //As info virão req.body
    // {"nome:"xxx, "email":"xxx@xxx", "senha":"123456"}

    let { nome, email, senha } = req.body;

    let novoUsuario = await Usuario.create({ nome, email, senha: bcrypt.hashSync(senha, 10) });

    return res.json(novoUsuario);


  },
  login: async (req, res) => {
    console.log('logando...')
    return res.send('logando...')
  }
}
