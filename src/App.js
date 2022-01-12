import React, {Fragment} from 'react';
import Student from './layout/Student';
import Employee from './layout/Employee';
import NavBar from './UI/NavBar';
import {Route} from 'react-router-dom';

function App() {

  return (
    <Fragment>
      <NavBar />
      <div className='container'>
        <Route path='/student'>
          <Student />
        </Route>
        <Route path='/employee'>
          <Employee />
        </Route>
      </div>
    </Fragment>
  )
}

export default App;