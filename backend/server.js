// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const students = require('./routes/students');  // Only once
const mongoURI = process.env.MONGO_URI;
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Register the routes
app.use('/students', students);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.log('MongoDB connection error:', err);
  });

// Start the server
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
