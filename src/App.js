import './App.css';
import React, { Component } from 'react';
import MainEditor from './Editor/MainEditor';
import SideBar from './SideBar/SideBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contentStates:[],
        indexOfSelected: 0
    }
  }
  componentWillMount(){
    this.loadData();
  }
  
  loadData(){
    console.log("===Data loaded===");
    const content = window.localStorage.getItem('content');
    console.log(content);
    this.setState({
      contentStates:[...this.state.contentStates, content]
    })
  }
  
  render() {
    console.log("===App rendering===");
    const {contentStates, indexOfSelected} = this.state;
    let selectedState = contentStates[indexOfSelected] || null;
    return (
      <div className="App">
        <SideBar/>
        <MainEditor editorStateRaw={selectedState}/>
      </div>
    );
  }
}

export default App;
