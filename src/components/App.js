import './App.css';
import React, { Component } from 'react';
import MainEditor from './Editor/MainEditor';
import SideBar from './SideBar';
import Store from './utility/Store';
import Util from './utility/util';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.store = new Store({
//       name:'ajinStore',
//       defaults:{'config':{}, 'ids':['10000'], 'docs':{}, 'indices':Util.createNewNode('10000','Ajinote','folder')}
//     })
//     this.state = {
//         selectedDocId: "",
//         selectedNodeId: "",
//         config:{},
//         ids: [],
//         indices: {},
//         docs:{},
//     }
//   }
//   componentWillMount(){
//     this.loadData();
//   }

//   loadData = () => {
//     this.setState({
//       config:this.store.get('config'),
//       ids:this.store.get('ids'),
//       indices:this.store.get('indices'),
//       docs:this.store.get('docs')
//     })
//   }

//   saveData = (key, value) => {
//     this.store.set(key,value);
//     this.loadData();
//   }
 
//   //Selectd DocId is for the id of selected document in the mainEditor
//   selectedDocIdOnChange = (id) =>{
//     this.setState({
//       selectedDocId:id
//     })
//   }

//   //Selected NodeId is the id of selected document in the tree
//   selectedNodeIdOnChange = (id) =>{
//     this.setState({
//       selectedNodeId:id
//     })
//   }
  
//   render() {
//     console.log("===App rendering===");
//     const {ids, indices, docs, selectedDocId, selectedNodeId} = this.state;
//     return (
//       <div className="App">
//         <SideBar ids={ids} indices={indices} saveData={this.saveData} selectedNodeId={selectedNodeId} selectedDocIdOnChange={this.selectedDocIdOnChange} selectedNodeIdOnChange={this.selectedNodeIdOnChange}/>
//         <MainEditor docs={docs} saveData={this.saveData} selectedNodeId={selectedNodeId} selectedDocId={selectedDocId} selectedNodeIdOnChange={this.selectedNodeIdOnChange}/>
//       </div>
//     );
//   }
// }

const App = () => {
    <div className="App">
        <SideBar/>
        <MainEditor/>
    </div> 
}

export default App;
