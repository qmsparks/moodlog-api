const db = require('../models');

// TODO adjust for auth once it's in place

const create = async (req, res) => {
  try {
    const createdThought = await db.Thought.create(req.body);
    return res.status(201).json({
      thought: createdThought
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