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

function App() {
  let rowList;
  const onSaveRowHandler = (rowData) => {
    rowList = rowData;
  }

  return (
    <PageState>
      <div className='container'>
        <div className='tableClass'>
          <Table data={students} onSaveRow={onSaveRowHandler} />
        </div>
        <Tabs data={rowList} maxLength={students.length} />
      </div>
    </PageState>
  )
}

export default App;