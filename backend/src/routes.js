const express = require ('express'); //é necessário importar a biblioteca sempre que for usar o server
const routes = express.Router();//utiliza-se para criar objetos específicos para rotas
const DevController = require('./controllers/DevController'); //importando arquivo devcontroller.js
//const Dev = require('./models/Dev');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);


//exportando as rotas p. utilizar em outros arquivos
module.exports = routes;


//endereço a ser ouvido, rota principal
//routes.get('/', (req, res) => {
    //template strings para colocar a variável name, cujo os dados foram fornecidos na barra de endereço
    //return res.send(`Hello ${req.query.name}`);

    //retorna uma mensagem com estrutura json
    //return res.json({message: `Hello ${req.query.name}`});
//});

//criar novo registro de dev
//routes.post('/devs', (req, res) => {
    //mostra no terminal infos da requisição
    //console.log(req.body);

  //  return res.json(req.body);
//});

