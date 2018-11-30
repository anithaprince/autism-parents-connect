const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
  event_title: {type: String, required: true},
  event_image:{type: String, required: true},
  event_details:{type: String},
});

const Events = mongoose.model('Event', EventSchema);
module.exports = Events;
