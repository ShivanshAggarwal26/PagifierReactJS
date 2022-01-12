import React from 'react';
import Student from './layout/Student';
// import Employee from './layout/Employee';
// import StudentState from './context/StudentState';
// import EmployeeState from './context/EmployeeState';
import { useDispatch, useSelector } from 'react-redux';
import { showTableActions } from './store/table-show-slice';

function App() {
  const dispatch = useDispatch();

  const showStudent = useSelector((state) => {
    return state.showTable.studentTableVisible;
  })

  const toggleStudentTableHandler = () => {
    dispatch(showTableActions.toggleStudentTable());
  }

  return (
    <div className='container'>
      <button onClick={toggleStudentTableHandler}>
        <span>STUDENT TABLE</span>
      </button>
      {showStudent && <Student />}

      {/* <EmployeeState>
        <Employee />
      </EmployeeState> */}
    </div>
  )
}

export default App;