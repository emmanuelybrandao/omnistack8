const express = require('express');
const mongoose = require('mongoose'); //ferramenta que utiliza apenas js para se comunicar com o bd.
const cors = require('cors');
const routes = require('./routes');
//cria um servidor do express
const server = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://emma_adm:ashuashuas@cluster0.bq4e1xz.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true

});

server.use(cors());

//eh necessário adicionar esse comando para que o express reconheça códigos em .json
server.use(express.json());

//utilizando o modulo do arquivo routes
server.use(routes);

//cria uma porta para que o servidor possa ouvir
server.listen(3333);