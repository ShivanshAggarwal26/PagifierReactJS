// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Tabs from './components/Tabs';
import Table from './components/Table';
import React, { useState } from 'react';
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
  // let page = 0;
  const [pageData, setPageData] = useState(0);
  const onSaveRowHandler = (rowData) => {
    rowList = rowData;
  }
  const tabClickHandler = (pageChange) => {
    // page = pageChange;
    setPageData(pageChange);
  }

  return (
    <div className='container'>
      <Table data={students} onSaveRow={onSaveRowHandler} pageValue={pageData}/>
      <Tabs data={rowList} pageValue={pageData} maxLength={students.length} onTabClick={tabClickHandler}/>
    </div>
  )
}

export default App;