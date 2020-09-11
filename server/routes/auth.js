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
    res.redirect('/contato')
  }
  
}
)



//logout

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/')
})

router.get('/cadastrocomercio', (req, res, next) => {
  console.log(req.user)
  const pegaCat = async function(){
    const response = await fetch('http://localhost:21053/apicomercios');
    const json = await response.json()
    var a = await JSON.stringify(json)
    var b = await JSON.parse(a)
    var comercios = { 'comercios': b}    
    console.log("comercios", comercios)
    res.render('novocomercio', comercios)
  }  
 pegaCat() 
})

router.get('/comercio/:url/editar', function(req, res){ 
  let url = req.params.url 
  const pegaDentro = async function(){
  const response = await fetch(`http://localhost:21053/apicomercios/${url}`)
  const json = await response.json() 
  var a = JSON.stringify(json)
  var b = JSON.parse(a)
  var comercio = { 'comercio': b} 
  console.log(comercio)   
  res.render('editar', comercio)
}
 pegaDentro()
})

router.get('/cadastrocategoria', (req, res, next) => {
  const pegaCat = async function(){
    const response = await fetch('http://localhost:21053/apicategorias');
    const json = await response.json()
    var a = JSON.stringify(json)
    var b = JSON.parse(a)
    var categorias = { 'categorias': b}    
    res.render('novacategoria', categorias) 
  }  
   pegaCat()  
  
  })

  router.get('/painel-comercio', (req, res) => {   
    console.log(req.user)
    const pegaCat = async function(){
      const response = await fetch('http://localhost:21053/apicomercios');
      const json = await response.json()
      var a = await JSON.stringify(json)
      var b = await JSON.parse(a)
      var comercios = { 'comercios': b}    
      console.log("comercios", comercios)
      res.render('painelcomercio', comercios)
    }  
   pegaCat() 
  })







module.exports = router;