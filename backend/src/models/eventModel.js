const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  image:        { type: Buffer, required: true },
  eventName:    { type: String, required: true },
  description:  { type: String, required: true },
  rollno:      { type: String, required: true },
  name:         { type: String, required: true },
  department:   { type: String, required: true },
  venue:        { type: String, required: true },
  startDate:    { type: Date,   required: true },
  endDate:      { type: Date,   required: true },
  startTime:    { type: String, required: true },
  endTime:      { type: String, required: true },
  formLink:     { type: String, trim: true },
  whatsappLink: { type: String, trim: true }
})

module.exports = mongoose.model('Event', eventSchema);