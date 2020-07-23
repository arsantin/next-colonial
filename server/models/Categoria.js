const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategoriaSchema = new Schema({
  nome: {
    type: String,
    required: [true, 'Nome requerido']
  },
  subcat: {
    type: String
  },
  icon: {
    type: String
  },
  url: {
    type: String
  }
})

const Categoria = mongoose.model('categorias', CategoriaSchema, 'categorias')

module.exports = Categoria