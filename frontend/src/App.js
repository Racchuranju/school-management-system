// frontend/src/App.js
import React from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

function App() {
    return (
        <div className="App">
            <h1>School Management System</h1>
            <AddStudent />
            <StudentList />
        </div>
    );
}

export default App;