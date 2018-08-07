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


  //ToDo:
  //Find the right place to put this method
  addNewFile=()=>{
    let {indices, ids, saveData, selectedNodeId} = this.props;
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
    }else{

    }
  }

  render() {
    return (
      <div className="MenuBar" style={{margin:"5px"}}>
        <IconButton onClick={this.addFileButtonOnClick}><NoteAddOutlinedIcon></NoteAddOutlinedIcon></IconButton>
        <IconButton><CreateNewFolderOutlinedIcon></CreateNewFolderOutlinedIcon></IconButton>
        <IconButton><DeleteOutlinedIcon></DeleteOutlinedIcon></IconButton>
        <IconButton><RefreshIcon></RefreshIcon></IconButton>
      </div>
    );
  }
}

export default MenuBar