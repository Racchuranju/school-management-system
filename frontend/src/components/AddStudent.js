// frontend/src/components/AddStudent.js
import React, { useState } from 'react';
import api from '../api';
import styles from './AddStudent.module.css';

function AddStudent() {
    const [formData, setFormData] = useState({ name: '', age: '', grade: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/students', formData)
            .then(() => alert('Student added successfully'))
            .catch(error => console.error('Error adding student:', error));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Enter name"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="age" className={styles.formLabel}>Age</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Enter age"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="grade" className={styles.formLabel}>Grade</label>
                <input
                    type="text"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Enter grade"
                    required
                />
            </div>
            <button type="submit" className={styles.submitBtn}>Add Student</button>
        </form>
    );
}

export default AddStudent;