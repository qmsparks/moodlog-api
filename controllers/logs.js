const db = require('../models');

const create = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({
      status: 200,
      message: "One create route!"
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