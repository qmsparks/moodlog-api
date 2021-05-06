const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
  moodLog: {
    type: Schema.Types.ObjectId,
    ref: 'Log',
    required: true
  },
  negativeThought: {
    type: String,
    required: true
  },
  startStrength: {
    type: Number,
    required: true
  },
  distortions: [String],
  positiveThought: {
    type: String,
    // required: true,
  },
  positiveBelief: {
    type: Number,
    // required: true
  },
  endStrength: {
    type: Number,
    // required: true
  }
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;