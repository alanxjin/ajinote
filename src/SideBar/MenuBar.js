import React, { Component } from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import RefreshIcon from '@material-ui/icons/Refresh'

class MenuBar extends Component {

  render() {
    
    return (
      <div className="MenuBar">
        <NoteAddOutlinedIcon></NoteAddOutlinedIcon>
        <CreateNewFolderOutlinedIcon></CreateNewFolderOutlinedIcon>
        <DeleteOutlinedIcon></DeleteOutlinedIcon>
        <RefreshIcon></RefreshIcon>
      </div>
    );
  }
}

export default MenuBar