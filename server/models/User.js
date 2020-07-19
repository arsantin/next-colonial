const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String,
  googleId: String,
  role: {
    type: String, 
    default: "visitante"
  },
  thumbnail: String,
  favoritos: Array
});

const User = mongoose.model('usuario', UserSchema)

module.exports = User