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
  componentDidMount(){
    this.loadData();
  }
  
  loadData(){
    console.log("===Data loaded===");
    const content = window.localStorage.getItem('content');
    console.log(content);
    this.setState({
      contentStates:this.state.contentStates.push(content)
    })
  }
  
  render() {
    const {contentStates, indexOfSelected} = this.state;
    console.log("===App rendering===");
    console.log(contentStates);
    let selectedState = contentStates[indexOfSelected] || null;
    return (
      <div className="App">
        <SideBar/>
        <MainEditor editorState={selectedState}/>
      </div>
    );
  }
}

export default App;
