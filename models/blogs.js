const mongoose = require('mongoose');
const bookmarkSchema = new mongoose.Schema({
  heading: String,
  image:,
  date:,
  Posted_by:,
  comments:,
  post_body:
  url: String,
});

const Bookmarks = mongoose.model('Bookmark', bookmarkSchema);
module.exports = Bookmarks;
