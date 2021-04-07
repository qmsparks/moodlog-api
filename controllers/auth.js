const bcrypt = require('bcryptjs');
const db = require('../models');

const register = async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again."
    })
  }
}

const login = async (req, res) => {
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
  register,
  login
}