// frontend/src/components/AddStudent.js
import React, { useState } from 'react';
import { addStudent } from '../api';

function AddStudent() {
    const [formData, setFormData] = useState({ name: '', age: '', grade: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(formData)
            .then(() => {
                alert('Student added successfully');
                setFormData({ name: '', age: '', grade: '' });
            })
            .catch(error => console.error('Error adding student:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="grade">Grade</label>
                <input
                    type="text"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add Student</button>
        </form>
    );
}

export default AddStudent;
