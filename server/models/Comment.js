const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const CommentSchema = new Schema({
  title: {type:String, required:true},
  content: {type:String, required:true},
  creator: {type:String, required:true}

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
