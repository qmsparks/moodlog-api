const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emotionSchema = new Schema({
  moodLog: {
    type: Schema.Types.ObjectId,
    ref: 'Log',
    required: true
  },
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