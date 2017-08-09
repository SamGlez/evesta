const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CenterSchema = new Schema({
  name: {type: String},
  type: {
    type: String,
    enum: ['centro de dia', 'residencia']
  },
  company: {type: String},
  nif: {type: String},
  picture: {
   type: String,
  },
  web: {type: String},
  province: {type: String},
  email: {type: String},
  number: {type: String},
  price: {type: String},
  services: {type: String},
  ratio: {type: String},
   _creator: {type:Schema.Types.ObjectId, ref:'User'}

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


const Center = mongoose.model("Center", CenterSchema);
module.exports = Center;
