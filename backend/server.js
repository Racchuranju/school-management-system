// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // This loads environment variables from .env file

// Initialize the Express app
const app = express();

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

// Check if the MongoDB URI is loaded correctly
if (!mongoURI) {
  console.error('MongoDB URI is not set in the environment variables!');
  process.exit(1); // Exit if URI is not found
}

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err));

// Set up routes (example)
const studentsRoute = require('./routes/students'); // Adjust this if necessary
app.use('/api/students', studentsRoute); // Adjust the route as needed

// Set up a default route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
