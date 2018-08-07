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
      defaults:{'config':{}, 'ids':[], 'docs':{}, 'indices':{}}
    })
    this.config = {};
    this.ids = [];
    this.indices = {};
    this.docs = {};
  }
  componentWillMount(){
    this.loadData();
  }

  loadData = () => {
    this.config = this.store.get('config');
    this.ids = this.store.get('ids');
    this.indices = this.store.get('indices');
    this.docs = this.store.get('docs');
  }

  saveData = (key, value) => {
    this.store.set(key,value);
    this.loadData();
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
        <SideBar ids={this.ids} indices={this.indices} saveData={this.saveData} selectedNodeId={selectedNodeId} selectedDocIdOnChange={this.selectedDocIdOnChange} selectedNodeIdOnChange={this.selectedNodeIdOnChange}/>
        <MainEditor docs={this.docs} saveData={this.saveData} selectedNodeId={selectedNodeId} selectedDocId={selectedDocId} selectedNodeIdOnChange={this.selectedNodeIdOnChange}/>
      </div>
    );
  }
}

export default App;
