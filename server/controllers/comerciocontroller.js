const mongoose = require('mongoose');
const Comercio = require('../models/Comercio')
const Categoria = require('../models/Categoria')
ObjectID = require('mongodb').ObjectID

module.exports = { 
  async index(req, res){
    try{
      const todoscomercios = Comercio.find({})
        .populate('categoria')
        .then(function(cat){       
          res.json(cat)
        });      
      }catch (e) {    
        return console.log("erro:", e); // passa o objeto de exceção para o manipulador de erro
      }
  },
  async inside(req, res, next){
      const todoscomercios = await Comercio.find({url: req.params.url})   
      .populate('categoria')     
      .then(function(estabelecimentos){       
      res.json(estabelecimentos)
        }).catch();      
  },  
  async update(req, res, next){
    const iD = req.body._id
    console.log("body", nome, iD)  
    await Comercio.updateOne(
      {_id: ObjectID(iD)},
      {$set: req.body},
      {overwrite: true})      
      .then(function(){
        res.redirect('/minha-conta/cadastrocomercio') 
    }).catch()
  },
  async store(req, res){
    console.log(req.body)
    
  //  const url = nome.replace(/\s+/g, '-').toLowerCase() 
    
      const comercio = await Comercio.create(req.body);     
      console.log(comercio)   
      res.redirect('/contato');
    
  },
  async delete(req, res){  
      Comercio.deleteOne({_id: req.params.id}).then(function(estabelecimento){
        res.send(estabelecimento);
      })     
  }
}