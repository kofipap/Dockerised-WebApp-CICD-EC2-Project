const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// serve frontend folder
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/orders', require('./routes/orders'));

// home page (THIS is what you asked about)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});