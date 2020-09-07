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
    const nome = req.body.nome
    const lat = req.body.lat
    const lon = req.body.lon
    const categoria = req.body.categoria
    const textodestaque = req.body.textodestaque
    const descricao = req.body.descricao
    const telefone = req.body.telefone
    const celular = req.body.celular
    const facebook = req.body.facebook
    const instagram = req.body.instagram
    const site = req.body.site
    const horarios = req.body.horarios
    const formasdepgto = req.body.formasdepgto
    const endereco = req.body.endereco 
    const cidade = req.body.cidade
    console.log("body", nome, iD)  
    await Comercio.updateOne(
      {_id: ObjectID(iD)},
      {$set: {"nome": nome, "descricao": descricao}},
      {overwrite: true})      
      .then(function(){
        res.redirect('/minha-conta/cadastrocomercio') 
    }).catch()
  },
  async store(req, res){
    console.log(req.body)  
    const lat = req.body.lat
    const lon = req.body.lon    
    const nome = req.body.nome
    const categoria = req.body.categoria
    const textodestaque = req.body.textodestaque
    const descricao = req.body.descricao
    const telefone = req.body.telefone
    const celular = req.body.celular
    const facebook = req.body.facebook
    const instagram = req.body.instagram
    const site = req.body.site
    const horarios = req.body.horarios
    const formasdepgto = req.body.formasdepgto
    const endereco = req.body.endereco 
    const cidade = req.body.cidade 
    const url = nome.replace(/\s+/g, '-').toLowerCase() 
    if(req.file){ 
      const avatar = req.file.originalname
      const est = {          
        "nome": nome,          
        "categoria": categoria,
        "avatar": avatar,
        "fotoprincipal": "fotoprincipal",
        "fotos": "fotos",
        "textodestaque" : textodestaque,
        "descricao": descricao,
        "telefone": telefone,
        "celular": celular,
        "facebook" : facebook,
        "instagram" : instagram,
        "site" : site,
        "horarios" : horarios,
        "formasdepgto" : formasdepgto,
        "endereco": endereco,
        "cidade": cidade,
        "url": url,
        "geometry": {"type": "Point", "coordinates": [lat, lon]}
      }
      console.log(est)
      const comercio = Comercio.create(est);        
      return res.json(est);
    }else{
      const avatar = "/assets/img/sem-foto.png"
      const est = {          
        "nome": nome,          
        "categoria": categoria,
        "avatar": avatar,
        "descricao": descricao,
        "telefone": telefone,
        "endereco": endereco,
        "cidade": cidade,
        "url": url,
        "geometry": {"type": "Point", "coordinates": [lat, lon]}
      }
      const comercio = Comercio.create(est);        
      res.redirect('/minha-conta/cadastrocomercio');
    }
  },
  async delete(req, res){  
      Comercio.deleteOne({_id: req.params.id}).then(function(estabelecimento){
        res.send(estabelecimento);
      })     
  }
}