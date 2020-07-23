const express = require('express')
const router = express.Router()
const { ObjectId } = require('mongodb');
const Comercio = require('../models/Comercio')

router.get('/', function(req, res, next){  
  const ver = req.cookies.latitude 
  if(ver){   
    Comercio.aggregate([{$geoNear: 
      {near: {
        type: 'Point', coordinates: [parseFloat(req.cookies.latitude), parseFloat(req.cookies.longitude)]},
        maxDistance: 999999999999999,
        distanceField: "dist.calculated",        
        spherical: true}
      }]).then(function(estabelecimento){         
        res.send(estabelecimento)
        console.log("agora", estabelecimento)
      }) 
    }else{
      Comercio.find({}).then(function(estabelecimento){
        res.send(estabelecimento)    
      })
    }
}) 



router.post('/contato', function(req, res, next){ 
    res.send(req.body)    
})



module.exports = router;