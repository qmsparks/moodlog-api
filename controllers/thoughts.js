const db = require('../models');

// TODO adjust for auth once it's in place

const create = async (req, res) => {
  try {
    const thoughtObj = req.body;
    thoughtObj.moodLog = req.params.logId;

    const createdThought = await db.Thought.create(thoughtObj);
    const updatedLog = await db.Log.findById(req.params.logId);
    updatedLog.thoughts.push(createdThought._id);
    await updatedLog.save();

    const populatedLog = await db.Log.findById(req.params.logId).populate('thoughts').populate('emotions');

    return res.status(201).json({
      thought: createdThought,
      log: populatedLog
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again."
    })
  }
}

const update = async (req, res) => {
  try {
    const updatedThought = await db.Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {new: true});

    if (!updatedThought) return res.status(200).json({
      message: "No thought with that id found in database"
    })

    return res.status(200).json({
      thought: updatedThought
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again."
    })
  }
}

const destroy = async (req, res) => {
  try {
    const deletedThought = await db.Thought.findByIdAndDelete(req.params.thoughtId);

    if (!deletedThought) return res.status(200).json({
      message: "No thought with that id found in database"
    })

    return res.status(200).json({
      message: "Thought deleted",
      thought: deletedThought
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again."
    })
  }
}

module.exports = {
  create,
  update,
  destroy
}