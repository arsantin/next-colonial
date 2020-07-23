const express = require('express')
const router = express.Router()
const comerciocontroller = require('../controllers/comerciocontroller');
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

//COMERCIO
router.get('/', comerciocontroller.index);
router.get('/:url', comerciocontroller.inside);
router.post('/update', upload.single('avatar'), comerciocontroller.update);
router.post('/novo-comercio', upload.fields([
  {name: 'avatar', maxCount: 1},
  {name: 'fotos', maxCount: 5},
  {name: 'fotoprincipal', maxCount: 1}
]), comerciocontroller.store);
router.delete('/delete', function(req, res, next){ 
})


module.exports = router;