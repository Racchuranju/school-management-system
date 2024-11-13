const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const router = express.Router();

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Import and use the students route
const studentRoutes = require('./routes/students');
app.use('/api/students', studentRoutes);

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(error => console.log(error.message));
