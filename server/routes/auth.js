const router = require('express').Router();
const passport = require('passport');
const fetch = require('node-fetch');
const User = require('../models/User')

/////////////////////AUTH///////////////////////////

const authCheck = (req, res, next) => { 
 if(req != "admin"){  
   res.send('/minha-conta/profile', [profile])    
  next();
 }else{
   console.log("prof", profile)
  res.redirect('/profile', profile);
 }
}


//google

router.get('/google', passport.authenticate('google', {scope: ['profile']}),
  function(req, res){
    console.log("google")
  }
)

//calback do google login

router.get('/google/redirect',
passport.authenticate('google', {failureRedirect: '/'}),
function(req, res){ 
  if(req.user){
    res.redirect('/')
  }else{
    res.redirect('/login')
  }  
}
)
//logout

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/')
})


//post local login

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(res)
    res.redirect('/');
  });

router.post('/favorito', (req, res, next)=> {
  const favoritos = req.body.favoritos;
  const userId = req.body.userId;  
  const idFavoritar = req.body.idFavoritar
  console.log("favoritos", favoritos, "userId", userId, "idFavoritar", idFavoritar)

  
})

router.post('/favorito/remove', (req, res, next)=> {
  const payload = req.body.favorito;
  const userId = req.user._id;  
  User.updateOne(
      {_id: userId},
      {$pull: {"favoritos": payload}},
      {overwrite: true})      
      .then(function(){
        res.redirect('/contato') 
    }).catch()
  
})

module.exports = router;