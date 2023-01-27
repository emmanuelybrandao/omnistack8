const { Schema, model } = require('mongoose');

//estrutura do BANCO DE DADOS para armazenar dados de devs
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: { 
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }], 
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }]
}, {
    timestamps: true,
});
//timestamps - cria e preenche duas colunas de forma automatica: createdAt e updatedAt (infos de criação e atualização de dados)
module.exports = model('Dev', DevSchema);