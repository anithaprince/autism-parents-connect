const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
  heading: {type: String, required: true},
  image:{type: String, default: 'images/question.jpg'},
  date:{type: Date, default: Date.now},
  posted_by:{type: String, default: "Anonymous"},
  post_body:{type: String, required: true},
  comments:[{type: String}],
});

const Blogs = mongoose.model('Blog', blogSchema);
module.exports = Blogs;
