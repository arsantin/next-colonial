const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create geolocation schema

const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
    required: true
  }
});

const ComercioSchema = new Schema({
  nome: {
    type: String,
    required: [true, 'Nome requerido']
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'categorias'
  },
  avatar: {
    type: String
  },
  fotoprincipal: {
    type: String
  },    
  fotos: {
    todas: {
      type: [{String}]
    }
  },
  textodestaque: {
    type: String
  }, 
  descricao: {
    type: String
  },
  telefone: {
    type: String
  },
  celular: {
    type: String
  },
  facebook: {
    type: String
  },
  instagram: {
    type: String
  },
  site: {
    type: String
  },
  horarios: {
    type: String
  },
  formasdepgto: {
    type: [String]
  },
  endereco: {
    type: String    
  },
  cidade: {
    type: String,
    default: "Itapoá"
  },
  url: {
    type: String
  },   
  geometry: {
    type: GeoSchema,
    required: false
  }
}, { strict: false })

const Comercio = mongoose.model('assinantes', ComercioSchema, 'assinantes');
module.exports = Comercio