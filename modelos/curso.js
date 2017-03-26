var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cursoSchema = new Schema({
    codigo: {type: Number},
    descricao: {type: String},
    cargaHoraria: {type: Number},
    categoria: {type: String}
});

module.exports = mongoose.model('Curso', cursoSchema);