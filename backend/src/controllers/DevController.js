const axios = require('axios'); //utilizando biblioteca para requisição em apis externas
const Dev = require('../models/Dev');


module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        //filtros 
        // ne = not equal, usuário logado n aparece na listagem
        // nin = not in, exclui os users que o user deu like
        // nin = not in, exclui os users que o user deu dislike
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } },
            ],
        })

        return res.json(users);
    },

    //funcao assincrona axios.get
    async store(req, res) {
        const { username } = req.body;

        //verificando se há usuários repetidos
        const userExists = await Dev.findOne({ user: username});

        if(userExists) {
            return res.json(userExists);
        };

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
}