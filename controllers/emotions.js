const db = require('../models');

// TODO adjust for auth once it's in place

const create = async (req, res) => {
  try {
    const createdEmotion = await db.Emotion.create(req.body);
    return res.status(201).json({
      emotion: createdEmotion
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
    
  } catch (err) {
    
  }
}

const destroy = async (req, res) => {
  try {
    
  } catch (err) {
    
  }
}

module.exports = {
  create,
  update,
  destroy
}