// frontend/src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../api';

function StudentList() {
    const [students, setStudents] = useState([]);

    // Fetch students from the backend
    useEffect(() => {
        getStudents()
            .then(response => setStudents(response.data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    // Delete student
    const handleDelete = (id) => {
        deleteStudent(id)
            .then(() => setStudents(students.filter(student => student._id !== id)))
            .catch(error => console.error('Error deleting student:', error));
    };

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map(student => (
                    <li key={student._id}>
                        {student.name} - Grade: {student.grade}
                        <button onClick={() => handleDelete(student._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
