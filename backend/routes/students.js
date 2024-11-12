// backend/routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../models/student'); // Assuming you have a Student model

// CREATE: Add a new student
router.post('/', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).send(newStudent);
    } catch (error) {
        res.status(400).send({ message: 'Error adding student', error });
    }
});

// READ: Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching students', error });
    }
});

// DELETE: Remove a student
router.delete('/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting student', error });
    }
});

module.exports = router;