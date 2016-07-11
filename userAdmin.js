var mongoose = require('mongoose');

var   Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

var userAdminSchema = new Schema({
   id_Obj:ObjectId,
   id: Number,
   Nombres: String,
   Apellidos: String,
   Usuario: String,
   Pass: String
});

module.exports = mongoose.model('userAdmin', userAdminSchema);