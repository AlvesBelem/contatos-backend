const express = require('express');
const ContatosController = require('../controllers/ContatosController');
const router = express.Router();



router.get('/contatos', ContatosController.index);


module.exports = router;