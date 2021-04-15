const db = require('../models');

// TODO adjust for auth once it's in place

const create = async (req, res) => {
  try {
    const emotionObj = req.body;
    emotionObj.moodLog = req.params.logId;

    const createdEmotion = await db.Emotion.create(emotionObj);
    const updatedLog = await db.Log.findById(req.params.logId);
    updatedLog.emotions.push(createdEmotion._id);
    await updatedLog.save();

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
    const updatedEmotion = await db.Emotion.findByIdAndUpdate(req.params.emotionId, req.body, {new: true});

    if (!updatedEmotion) return res.status(200).json({
      message: "No emotion with that id found in database"
    })

    return res.status(200).json({
      emotion: updatedEmotion
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
    const deletedEmotion = await db.Emotion.findByIdAndDelete(req.params.emotionId);

    if (!deletedEmotion) return res.status(200).json({
      message: "No emotion with that id found in database"
    })

    return res.status(200).json({
      message: "Emotion deleted",
      emotion: deletedEmotion
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