const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
  title: {type: String, required: true},
  image:{type: String, required: true},
  details:{type: String},
});

const Events = mongoose.model('Event', EventSchema);
module.exports = Events;
