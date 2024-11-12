import students from './routes/students.js';
const students = require('./routes/students'); // If students.js is in the routes folder
const express = require('express');
const path = require('path');
const studentRoutes = require(path.join(__dirname, 'routes', 'students')); // Adjusted for debugging

const app = express();
app.use('/students', studentRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schoolDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
