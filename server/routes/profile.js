const router = require('express').Router();

const authCheck = (req, res, next) => {
  if(req.user){ 
    if (req.user.role === "admin"){
      next(); 
    }else{
      res.redirect('/meuperfil')
    }         
  }else{
    res.redirect('/minha-conta/login');   
  }
}

router.get('/', (req, res) => {   
  const role = res; 
  console.log("role", role) 
})

module.exports = router