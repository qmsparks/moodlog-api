// ANCHOR exernal imports
const express = require('express');

// ANCHOR internal imports
const routes = require('./routes');

// ANCHOR config
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

// ANCHOR middleware
app.use(express.json());

// ANCHOR routes
app.get('/', (req, res) => {
  res.send('<h1>Do your dang CBT homework</h1>')
})

app.use('/api/v1/logs', routes.logs);
app.use('/api/v1/emotions', routes.emotions);
app.use('/api/v1/thoughts', routes.thoughts);

// ANCHOR connection
app.listen(PORT, () => {
  console.log(`Server is live and listening at ${PORT}`);
})