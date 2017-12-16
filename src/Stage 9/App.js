import React, { Component } from 'react';

import Employee from './models/Employee';


class App extends Component {
 //constructor
  

  // selectEmployee
 

  // refresh


  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          <EmployeeList /> 
          <EmployeeEditor />
        </div>
      </div>
    )
  }
}

export default App;