import Tabs from './components/tabs/Tabs';
import Table from './components/table/Table';
import React from 'react';
import PageState from './context/PageState';

const students = [];

for (let i = 0; i < 50; i++) {
  let student = {
    rollNo: i + 1,
    name: (Math.random() + 1).toString(36).substring(7),
    emailId: (Math.random() + 1).toString(36).substring(7)
  };
  students.push(student);
}

  // async function addStudentDataHandler(students) {
  //   await fetch('https://react-http-4d12b-default-rtdb.firebaseio.com/', {
  //       method: 'POST',
  //       body: JSON.stringify(students),
  //       headers: {
  //           'Content-Type': 'application/json'
  //       }
  //   })
  // }

  // addStudentDataHandler(students);

const studentsNew = [];

for (let i = 0; i < 50; i++) {
  let student = {
    rollNo: i + 1,
    name: (Math.random() + 1).toString(36).substring(7),
    emailId: (Math.random() + 1).toString(36).substring(7)
  };
  studentsNew.push(student);
}
  
function App() {
  let rowList;
  const onSaveRowHandler = (rowData) => {
    rowList = rowData;
  }

  return (
    <PageState>
      <div className='container'>
        <div className='innerClass'>
          <div className='tableClass'>
            <Table data={students} onSaveRow={onSaveRowHandler} />
          </div>
          <Tabs maxLength={students.length} />
        </div>

        <div className='innerClass'>
          <div className='tableClass'>
            <Table data={studentsNew} onSaveRow={onSaveRowHandler} />
          </div>
            <Tabs maxLength={students.length} />
        </div>
      </div>
    </PageState>
  )
}

export default App;