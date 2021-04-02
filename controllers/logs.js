const db = require('../models');

const create = async (req, res) => {
  try {
    const createdLog = await db.Log.create(req.body);
    
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

module.exports = {
  create,
};