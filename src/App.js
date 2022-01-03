import React from 'react';
import Student from './layout/Student';
import Employee from './layout/Employee';
import StudentState from './context/StudentState';
import EmployeeState from './context/EmployeeState';

function App() {
  
  return (
    <div className='container'>
      <StudentState>
        <Student />
      </StudentState>

      <EmployeeState>
        <Employee />
      </EmployeeState>
    </div>
  )
}

export default App;