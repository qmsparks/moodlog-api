const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emotionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  startStrength: {
    type: Number,
    required: true
  },
  endStrength: {
    type: Number,
    // required: true
  }
});

const Emotion = mongoose.model('Emotion', emotionSchema);

module.exports = Emotion;