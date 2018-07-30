import './App.css';
import React, { Component } from 'react';
import MainEditor from './Editor/MainEditor';
import SideBar from './SideBar/SideBar';
import Store from './utility/Store';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        indexOfSelected: 0,
        selectedDocId: "3"
    }
    this.store = new Store({
      name:'ajinStore',
      defaults:{'config':{}, 'doc':{}, 'index':{}}
    })
  }
  componentWillMount(){
    this.loadData();
  }
   
  loadData(){
  }
  
  render() {
    console.log("===App rendering===");
    const {selectedDocId} = this.state;
    return (
      <div className="App">
        <SideBar store={this.store}/>
        <MainEditor store={this.store} selectedDocId={selectedDocId}/>
      </div>
    );
  }
}

export default App;
