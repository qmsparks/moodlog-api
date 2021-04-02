const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
  event: String,
  emotion: {
    type: Schema.Types.ObjectId,
    ref: 'Emotion'
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ]
},
{
  tiestamps: true
})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;