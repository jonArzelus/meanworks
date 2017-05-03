var mongoose = require('mongoose');

module.exports = mongoose.model('Erab', {
  izena: String,
  abizena: String,
  postaElektronikoa: String,
  pasahitza: String,
  rol:String,
  gogokoDitu: [],
  bozkatuDitu:[]
});