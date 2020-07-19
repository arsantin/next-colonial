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

router.get('/', authCheck, (req, res) => {   
  const role = req.user;    
  res.render('profile', {user: req.user});
 
})

module.exports = router