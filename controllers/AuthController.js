const { Usuario } = require('../database/models');
const bcrypt = require('bcrypt');
const { where, json } = require('sequelize/types');
const jwt = require('jsonwebtoken');


module.exports = {
  registrar: async (req, res) => {

    //As info virão req.body
    // {"nome:"xxx, "email":"xxx@xxx", "senha":"123456"}

    let { nome, email, senha } = req.body;

    try {

      let novoUsuario = await Usuario.create({ nome, email, senha: hashSync(senha, 10) });
      return res.json(novoUsuario);
      delete novoUsuario.senha;

    } catch (error) {
      return res.status(409).json({error:1})
    }

    

    // console.log('registrando...')
    // return res.send('registrando...')
  },
  login: async (req, res) => {

    // As info virão no req.body
        // {"email":"___@_____", "senha":"XXXXXXX"}

        // Capturar as info do body

        let { email, senha } = req.body;

        // Pesquisar no BD um usuário com o email dado

        const usuario = await Usuario.findOne({where:{email}});

        // Se não existir usuário, retornar erro.

        if(!usuario){
          return res,status(403).json({error:1, msg:"Acesso negado"});
        }

        // Existindo o usuário, validar a senha dele (bcrypt)

        if(!bcrypt.compareSync(senha, usuario.senha)){

          // Se a senha for inválida, retornar erro.
          return res.status(403).json({error:1, msg:"Acesso negado"});
        }

        // removendo senha do usuario
        usuario.senha = undefined

        // gerando o token com os dados do usuario e com uma senha

        let token =jwt.sign(usuario.toJSON(),"senha");




        // Se a senha for ok, retornar msg sucesso (por enquanto...)

        res.status(200).json({erro:1, msg:'Sucesso', token});

        
     
  }
}
