const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/students'); // Import routes

const app = express();
app.use(express.json());
app.use('/api/students', studentRoutes); // Use the route
const cors = require('cors');
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schoolDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
