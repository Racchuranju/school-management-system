// backend/models/Student.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
    enrolled: { type: Boolean, default: true }
});

module.exports = mongoose.model('Student', StudentSchema);