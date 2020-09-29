const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = { 
  async update(req, res, next){   
    await User.updateOne(
      {_id: ObjectID(iD)},
      {$set: {"nome": nome, "descricao": descricao}},
      {overwrite: true})      
      .then(function(){
        res.redirect('/minha-conta/cadastrocomercio') 
    }).catch()
  }
}