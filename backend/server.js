const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI; // Access the MONGO_URI from environment

if (!mongoURI) {
  console.log("MongoDB URI is not set in the environment variables!");
  process.exit(1);
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));
