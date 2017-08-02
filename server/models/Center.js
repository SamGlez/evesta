const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CenterSchema = new Schema({
  name: {type:String, required:true},
  type: {type:String, required:true},
  company: {type:String, required:true},
  nif: {type:String, required:true},
  picture: String,
  web: String,
  province: String,
  email: {type:String, required:true},
  number: Number,
  price: Number,
  services: String,
  ratio: Number,
   _creator: {type:Schema.Types.ObjectId, ref:'User'}

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Center = mongoose.model("Center", CenterSchema);
module.exports = User;
