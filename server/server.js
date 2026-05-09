const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/orders', require('./routes/orders'));

app.get('/', (req, res) => {
  res.send("Kofi's Pen API Running");
});

// Start server FIRST
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});

// THEN connect DB (non-blocking)
connectDB();