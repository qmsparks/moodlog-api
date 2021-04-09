// ANCHOR external imports
const express = require('express');
const cors = require('cors');

// ANCHOR internal imports
const { logs, emotions, thoughts, auth } = require('./routes');
const authRequired = require('./middleware/authRequired');

// ANCHOR config
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

// ANCHOR middleware
app.use(express.json());
app.use(cors());

// ANCHOR routes
app.get('/', (req, res) => {
  res.send('<h1>Do your dang CBT homework</h1>')
})
app.use('/api/v1/auth', auth);

app.use(authRequired);

app.use('/api/v1/logs', logs);
app.use('/api/v1/emotions', emotions);
app.use('/api/v1/thoughts', thoughts);


// ANCHOR connection
app.listen(PORT, () => {
  console.log(`Server is live and listening at ${PORT}`);
})