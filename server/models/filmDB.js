var mongoose = require('mongoose');

module.exports = mongoose.model('Filma', {
  izena: String,
  urtea: String,
  sinopsia: String,
  irudia: String,
  bozkak:Number,
  iritsiak: [String]
});