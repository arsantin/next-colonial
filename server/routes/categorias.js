const express = require('express')
const router = express.Router()
const categoriacontroller = require('../controllers/categoriacontroller');
const Categoria = require('../models/Categoria')

var path = require('path')
var multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      // error first callback
      cb(null, './public/assets/img/avatar')
  },
  filename: function (req, file, cb) {    
      cb(null, file.originalname)
  }
});

// utiliza a storage para configurar a instância do multer
const upload = multer({ storage });
router.get('/', categoriacontroller.index);
router.get('/:url/:id', categoriacontroller.inside);
router.post('/cadastra-categorias',  upload.single('avatar'), function(req, res, next){ 
  const nome = req.body.nome
  const url = req.body.url
  console.log(req.file)
  if(req.file){ 
    const icon = req.file.originalname 
      Categoria.create(req.body).then(categoria => {  
        Categoria.updateOne(    
          {nome: nome},
          {$set: 
            { 
              "nome": nome,
              "icon": icon,
              "url": url 
              }
        }, { overwrite: true }).then(function(){    
        categoria = {
          "nome": nome,
          "icon": icon,
          "url" : url
        }
      res.redirect('/cadastrocategoria') 
    }).catch(next)    
  })
  }else{
    const icon = "/assets/sem-foto.png"
      Categoria.create(req.body).then(categoria => {  
        Categoria.updateOne(    
          {nome: nome},
          {$set: 
            { 
              "nome": nome,
              "icon": icon,
              "url" : url
              }
        }, { overwrite: true }).then(function(){    
        categoria = {
          "nome": nome,
          "icon": icon,
          "url" : url
        }
      res.redirect('/minha-conta/cadastrocategoria') 
    }).catch(next)    
  })
  }
  })
module.exports = router;