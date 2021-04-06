const db = require('../models');

const create = async (req, res) => {
  try {
    const createdLog = await db.Log.create(req.body);
    // TODO push log into a user document once I've added auth
    return res.status(201).json({
      log: createdLog,
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
    // TODO update this so it only grabs the logged-in user's logs once I've added auth
    const foundLogs = await db.Log.find({});
    return res.status(200).json({
      "logs": foundLogs
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again."
    })
  }
}

const show = async (req, res) => {
  try {
    // TODO ensure that only each log's users can receive this information once I've implemented auth
    const foundLog = await db.Log.findById(req.params.logId);
    
    if (!foundLog) return res.status(200).json({
      message: "No moodlog with that id found in database"
    });

    return res.status(200).json({
      log: foundLog
    });
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
    // TODO the same note as before: make sure to double back and adjust this for auth once that's been implemented

    const updatedLog = await db.Log.findByIdAndUpdate(req.params.logId, req.body, {new: true});

    if (!updatedLog) return res.status(200).json({
      message: "No moodlog with that id found in database"
    })

    return res.status(200).json({
      log: updatedLog
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
    
  }
}

module.exports = {
  create,
  index,
  show,
  update,
  destroy
};