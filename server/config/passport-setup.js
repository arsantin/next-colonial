const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys')
const User = require('../models/User')

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  })  
})

passport.use(
  new GoogleStrategy({
  //option of strategy
    callbackURL: '/minha-conta/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
  //check if user exists in the db
  User.findOne({googleId: profile.id}).then((currentUser)=> {
      if(currentUser){
        //already have a user
        
        done(null, currentUser)
      }else{
        //if not, create user in the db
        new User({
      username: profile.displayName,
      googleId: profile.id,
      thumbnail: profile._json.picture
    }).save().then((newUser) => {
      console.log("novo usuário criado:" + newUser)
      done(null, newUser);
    })
  }
})

    
})
);