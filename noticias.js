var mongoose = require('mongoose');

var   Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

require('./categorias');

var categorias = mongoose.model('categorias');

var noticiasSchema = new Schema({
   id_Obj:ObjectId,
   id: Number,
   fecha: String,
   categoria: { type: Schema.ObjectId, ref: "categorias" },
   titulo: String,
   informacion: String,
   adicionales: Array
});

module.exports = mongoose.model('noticias', noticiasSchema);