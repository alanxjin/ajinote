import './App.css';
import React, { Component } from 'react';
import MainEditor from './Editor/MainEditor';
import SideBar from './SideBar/SideBar'

class App extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="App">
        <SideBar/>
        <MainEditor/>
      </div>
   
    );
  }
}

export default App;
