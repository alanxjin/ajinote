import React, { Component } from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import RefreshIcon from '@material-ui/icons/Refresh'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Util from '../utility/util';

class MenuBar extends Component {
  
  addFileButtonOnClick = ()=>{
    this.addNewFile();
  }

  deleteButtonOnClick = ()=>{
    this.delete();
  }


  //ToDo:
  //* Find the right place to put this method
  //* Add pop up to alert the user
  addNewFile=()=>{
    let {indices, ids, saveData, selectedNodeId, selectedNodeIdOnChange, selectedDocIdOnChange} = this.props;
    let newIndices = Util.clone(indices);
    let selectedNode = Util.findNode(newIndices, selectedNodeId);
    if(selectedNode.type == "folder"){
      let newIds = Util.clone(ids);
      let newId = Util.generateId();

      while(newId in ids){
        newId = Util.generateId();
      }

      newIds.push(newId);
      selectedNode.nodes.push(Util.createNewNode(newId,"Untitled","file"));

      saveData("ids", newIds);
      saveData("indices", newIndices);
      selectedNodeIdOnChange(newId);
      selectedDocIdOnChange(newId)

    }else{

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
    return (
      <div className="MenuBar" style={{margin:"5px"}}>
        <IconButton onClick={this.addFileButtonOnClick}><NoteAddOutlinedIcon></NoteAddOutlinedIcon></IconButton>
        <IconButton ><CreateNewFolderOutlinedIcon></CreateNewFolderOutlinedIcon></IconButton>
        <IconButton onClick={this.deleteButtonOnClick}><DeleteOutlinedIcon></DeleteOutlinedIcon></IconButton>
        <IconButton><RefreshIcon></RefreshIcon></IconButton>
      </div>
    );
  }
}

export default MenuBar