import './App.css';
import React, { Component } from 'react';
import MainEditor from './Editor/MainEditor';
import SideBar from './SideBar/SideBar';
import Store from './utility/Store';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDocId: "",
        selectedNodeId: ""
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
 
  //Selectd DocId is for the id of selected document in the mainEditor
  selectedDocIdOnChange = (id) =>{
    this.setState({
      selectedDocId:id
    })
  }

  //Selected NodeId is the id of selected document in the tree
  selectedNodeIdOnChange = (id) =>{
    this.setState({
      selectedNodeId:id
    })
  }
  
  render() {
    console.log("===App rendering===");
    const {selectedDocId, selectedNodeId} = this.state;
    return (
      <div className="App">
        <SideBar store={this.store} selectedNodeId={selectedNodeId} selectedDocIdOnChange={this.selectedDocIdOnChange} selectedNodeIdOnChange={this.selectedNodeIdOnChange}/>
        <MainEditor store={this.store} selectedNodeId={selectedNodeId} selectedDocId={selectedDocId} selectedNodeIdOnChange={this.selectedNodeIdOnChange}/>
      </div>
    );
  }
}

export default App;
