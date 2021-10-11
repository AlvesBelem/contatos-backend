var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var AuthRouter = require('./routes/AuthRouter');
var ContatosRouter = require('./routes/ContatosRouter')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', AuthRouter);
app.use('/',ContatosController)
module.exports = app;
