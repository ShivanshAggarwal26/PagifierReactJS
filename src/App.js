import Tabs from './components/tabs/Tabs';
import Table from './components/table/Table';
import React from 'react';
import PageState from './context/PageState';
import superagent from 'superagent';
import axios from 'axios';

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
  //   await fetch('https://react-http-4d12b-default-rtdb.firebaseio.com/students.json', {
  //       method: 'POST',
  //       body: JSON.stringify(students),
  //       headers: {
  //           'Content-Type': 'application/json'
  //       }
  //   })
  // }

  // superagent
  // .post('https://react-http-4d12b-default-rtdb.firebaseio.com/s.json')
  // .send(students) // sends a JSON post body
  // .set('X-API-Key', 'foobar')
  // .set('accept', 'json')
  // .end((err, res) => {
  //   // Calling the end function will send the request
  //   console.log(err);
  // })

  // axios({
  //   method: 'post',
  //   url: 'https://react-http-4d12b-default-rtdb.firebaseio.com/a.json',
  //   data: students
  // })

  // addStudentDataHandler(students);

  // async function getStudentData() {
  //   const response = await fetch('https://react-http-4d12b-default-rtdb.firebaseio.com/students.json');
  //   const data = await response.json();
  //   // const {a, b} = data;
  //   // console.log(a)
  //   console.log(data["-MsQMFFIMuoT8hGdmoIF"])
  //   const newData = [];

  //   for (const key in data["-MsQMFFIMuoT8hGdmoIF"]) {
  //     newData.push({
  //       rollNo: key.rollNo,
  //       name: key.name,
  //       emailId: key.emailId
  //     })
  //   }

  //   console.log(newData);
  // }

  // getStudentData();

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