const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
  // NOTE there will also be a user here later
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