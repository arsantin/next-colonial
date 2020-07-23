const mongoose = require('mongoose');
const Categoria = require('../models/Categoria');
const Comercio = require('../models/Comercio');
ObjectID = require('mongodb').ObjectID

module.exports = { 
  async index(req, res){
    try{
      const todoscomercios = Categoria.find({})
      .then(function(categoria){
        res.json(categoria)    
      })
      }catch (e) {    
        return console.log("erro:", e); // passa o objeto de exceção para o manipulador de erro
      }
  },
  async inside(req, res, next){    
    try{
      console.log(req.params)
      Comercio.find({categoria: ObjectID(req.params.id)})    
      .populate('categoria')
      .then(function(cat){        
        Comercio.find({categoria: ObjectID(req.params.id)})
        console.log("cat", cat)            
          res.json(cat)
      })
    }catch(e) {    
      return console.log("erro:", e); // passa o objeto de exceção para o manipulador de erro
    }
}}