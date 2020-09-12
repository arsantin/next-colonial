const router = require('express').Router();
const passport = require('passport');

const authCheck = (req, res, next) => {
  if(req.user){ 
    if (req.user.role === "admin"){
      next(); 
    }else{
      res.redirect('/profile')
    }         
  }else{
    res.redirect('/minha-conta/login');   
  }
}

router.get('/perfil', function(req, res){  
 const {user} = req
  res.status(200).json(user)
}
)

module.exports = router
