import React, { Component } from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import RefreshIcon from '@material-ui/icons/Refresh'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Util from '../utility/util';

class MenuBar extends Component {
  constructor(props){
    super(props);
    this.state={
      inputShown: false,
      inputValue:"",
      action:"",
    }
  }
  addFileButtonOnClick = ()=>{
    this.setState({inputShown:true, action:"addFile"});
  }

  addFolderButtonOnClick = ()=>{
    this.setState({inputShown:true, action:"addFolder"});
  }

  renameButtonOnClick = ()=>{
    this.setState({inputShown:true, action:"rename"});
  }

  deleteButtonOnClick = ()=>{
    this.setState({inputShown:true, action:"delete"});
    
  }

  onInputChange = (event) =>{
    this.setState({inputValue: event.target.value});
  }

  onButtonConfirm = () =>{
    const {action, inputValue} = this.state;
    if(action === "addFile"){
      this.addNew("file",inputValue);
    }else if(action === "addFolder"){
      this.addNew("folder",inputValue);
    }else if(action ==="rename"){
      this.rename();
    }else if(action === "delete"){
      this.delete();
    }
    this.resetInput();
  }

  onButtonCancel = () => {
    this.resetInput();
  }

  resetInput = () => {
    this.setState({
      action:"",
      inputValue:"",
      inputShown:false
    })

  }

  rename = () => {
    let {indices, saveData, selectedNodeId} = this.props;
    const {inputValue} = this.state;
    let newIndices = Util.clone(indices);
    let selectedNode = Util.findNode(newIndices, selectedNodeId);
    if(selectedNode != null){
      selectedNode.name = inputValue;
      saveData("indices", newIndices);
    }
  }

  //ToDo:
  //* Find the right place to put this method
  //* Add pop up to alert the user
  addNew = (type, name) => {
    let {indices, ids, saveData, selectedNodeId, selectedNodeIdOnChange, selectedDocIdOnChange} = this.props;
    let newIndices = Util.clone(indices);
    let selectedNode = Util.findNode(newIndices, selectedNodeId);
    if(selectedNode != null){
      if(selectedNode.type == "folder"){
        let newIds = Util.clone(ids);
        let newId = Util.generateId();

        while(newId in ids){
          newId = Util.generateId();
        }

        newIds.push(newId);
        selectedNode.nodes.push(Util.createNewNode(newId,name,type));

        saveData("ids", newIds);
        saveData("indices", newIndices);
        selectedNodeIdOnChange(newId);
        selectedDocIdOnChange(newId)

      }else{

      }
    }
  }

  //ToDo:
  //* Find the right place to put this method
  //* Add pop up to alert the user
  delete = () =>{
    let {indices, ids, saveData, selectedNodeId, selectedDocIdOnChange, selectedNodeIdOnChange} = this.props;
    let newIndices = Util.clone(indices);
    let newIds = Util.clone(ids);
    let parentNode = Util.findParent(newIndices, selectedNodeId);

    if(parentNode != null){
      let childNodeIndex = parentNode.nodes.findIndex((obj) => obj.id === selectedNodeId);
      let idIndex = newIds.indexOf(selectedNodeId);

      parentNode.nodes.splice(childNodeIndex,1);
      newIds.splice(idIndex, 1);

      saveData("ids", newIds);
      saveData("indices", newIndices);

      selectedNodeIdOnChange("");
      selectedDocIdOnChange("");
    }
  }

  render() {
    const {inputShown, inputValue} = this.state;
    return (
      <div className="MenuBar">
        <IconButton style={{margin:"5px"}} onClick={this.addFileButtonOnClick}><NoteAddOutlinedIcon></NoteAddOutlinedIcon></IconButton>
        <IconButton style={{margin:"5px"}} onClick={this.addFolderButtonOnClick}><CreateNewFolderOutlinedIcon></CreateNewFolderOutlinedIcon></IconButton>
        <IconButton style={{margin:"5px"}} onClick={this.renameButtonOnClick}><RefreshIcon></RefreshIcon></IconButton>
        <IconButton style={{margin:"5px"}} onClick={this.deleteButtonOnClick}><DeleteOutlinedIcon></DeleteOutlinedIcon></IconButton>
        {inputShown?
          <div>
            <Input style={{marginLeft:"35px", marginBottom:"10px"}} value={inputValue} onChange={this.onInputChange}></Input>
            <div style={{marginLeft:"35px"}}>
              <Button onClick={this.onButtonConfirm} color="primary">OK</Button>
              <Button onClick={this.onButtonCancel} color="secondary">Cancel</Button>
            </div>
          </div>
        : ""}
      </div>
    );
  }
}

export default MenuBar