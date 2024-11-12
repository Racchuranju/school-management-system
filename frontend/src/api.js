// frontend/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your backend URL in production

// Student API calls
export const getStudents = () => axios.get(`${API_URL}/students`);
export const addStudent = (studentData) => axios.post(`${API_URL}/students`, studentData);
export const deleteStudent = (studentId) => axios.delete(`${API_URL}/students/${studentId}`);
