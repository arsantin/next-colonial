const mongoose = require('mongoose');
const Schema = mongoose.schema;

const Classificados = new Schema ({
  titulo: {
    type: String,
    required: [true, 'Título obrigatório']
  },
  descricao: {
    type: String
  },
  publicado: Boolean,
  default: false
})

const Classificados = mongoose.model('classificados', ClassificadosSchema);

module.exports = Classificados
