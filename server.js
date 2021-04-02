// ANCHOR exernal imports
const express = require('express');

// ANCHOR internal imports
const db = require('./models');

// ANCHOR config
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

// ANCHOR middleware

// ANCHOR routes

// ANCHOR connection
app.listen(PORT, () => {
  console.log(`Server is live and listening at ${PORT}`);
})