const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Center = require('./Center');

const UserSchema = new Schema({
  username: {type:String, required:true},
  password: {type:String, required:true},
  name: String,
  lastname: String,
  company: String,
  email: String,
  description: String,

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
