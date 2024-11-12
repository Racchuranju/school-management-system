// backend/routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create a new student
router.post('/students', async (req, res) => {
    const { name, age, grade } = req.body;
    const student = new Student({ name, age, grade });
    await student.save();
    res.status(201).json(student);
});

// Get all students
router.get('/students', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

module.exports = router;