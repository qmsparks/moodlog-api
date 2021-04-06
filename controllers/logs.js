const db = require('../models');

const create = async (req, res) => {
  try {
    const createdLog = await db.Log.create(req.body);
    // TODO push log into a user document once I've added auth
    return res.status(201).json({
      "log": createdLog,
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again."
    })
  }
}

const index = async (req, res) => {
  try {
    
  } catch (err) {
    
  }
}

const show = async (req, res) => {
  try {
    
  } catch (err) {
    
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
  index,
  show,
  update,
  destroy
};