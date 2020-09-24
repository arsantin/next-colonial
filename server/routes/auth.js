const router = require('express').Router();
const passport = require('passport');
const fetch = require('node-fetch');

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

module.exports = router;