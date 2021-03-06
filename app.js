var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoose = require('mongoose');
var error = require('./middlewares/error');

mongoose.connect('mongodb://localhost/cursos');

app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser('cadcursos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
load('models')
  .then('controllers')
  .then('routes')
  .into(app);

//middlewares
app.use(error.notFound);
app.use(error.serverError);

app.listen(3000, function () {
  console.log("Aplicação no ar.");
});