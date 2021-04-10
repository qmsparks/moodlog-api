const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  event: {
    type: String,
    required: true
  },
  emotions:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Emotion'
    }
  ],
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ]
},
{
  timestamps: true
})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;