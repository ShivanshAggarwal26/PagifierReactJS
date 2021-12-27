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

import Tabs from './components/tabs/Tabs';
import Table from './components/table/Table';
import React, { useState } from 'react'
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
  const [scaleData, setScaleData] = useState(10);
  const onSaveRowHandler = (rowData) => {
    rowList = rowData;
  }
  const tabClickHandler = (pageChange) => {
    // page = pageChange;
    setPageData(pageChange);
  }
  const scaleChangeHandler = (scaleValue) => {
    setScaleData(+scaleValue);
  }

  return (
    <div className='container'>
      <div className='tableClass'>
        <Table data={students} onSaveRow={onSaveRowHandler} pageValue={pageData} scale={scaleData} />
      </div>
      <Tabs data={rowList} pageValue={pageData} maxLength={students.length} 
            onTabClick={tabClickHandler} onScaleChange={scaleChangeHandler}
            scale={scaleData} />
    </div>
  )
}

export default App;