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
router.post('/nova-categoria',  upload.single('avatar'), categoriacontroller.store);
module.exports = router;