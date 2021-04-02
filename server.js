// ANCHOR exernal imports
const express = require('express');

// ANCHOR internal imports
const db = require('./models');
const routes = require('./routes');

// ANCHOR config
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

// ANCHOR middleware

// ANCHOR routes
app.get('/', (req, res) => {
  res.send('<h1>Do your dang CBT homework</h1>')
})

// ANCHOR connection
app.listen(PORT, () => {
  console.log(`Server is live and listening at ${PORT}`);
})