// const mongoose = require('mongoose');
// const Schema   = mongoose.Schema;
//
// const userSchema = new Schema({
//   username: String,
//   password: String
// }, {
//   timestamps: {
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
//   }
// });
//
// const User = mongoose.model('User', userSchema);
// module.exports = User;



const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

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
