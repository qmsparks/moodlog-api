const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');


const register = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({email: req.body.email});

    if (foundUser) {
      return res.send({message: "Account is already registered"});
    }

    const registerObj = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    registerObj.password = hash;

    const createdUser = await db.User.create(registerObj);

    return res.status(201).json({
      status: 201,
      message: "Success",
      createdUser
    })

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
    const foundUser = await db.User.findOne({ email: req.body.email });
    
    if (!foundUser) {
      return res.send({ message: "Email or password incorrect" });
    }

    const match = await bcrypt.compare(req.body.password, foundUser.password);
    
    if (!match) {
      return res.send({ message: "Email or password incorrect" });
    }

    const signedJwt = await jwt.sign(
      {
        _id: foundUser._id
      },
      process.env.SECRET,
      {
        expiresIn: "24h"
      }
    )

    return res.status(200).json({
      status: 200,
      message: "Success",
      signedJwt,
    });

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