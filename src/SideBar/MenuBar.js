import React, { Component } from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import RefreshIcon from '@material-ui/icons/Refresh'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class MenuBar extends Component {

  render() {
    
    return (
      <div className="MenuBar" style={{margin:"5px"}}>
        <IconButton><NoteAddOutlinedIcon></NoteAddOutlinedIcon></IconButton>
        <IconButton><CreateNewFolderOutlinedIcon></CreateNewFolderOutlinedIcon></IconButton>
        <IconButton><DeleteOutlinedIcon></DeleteOutlinedIcon></IconButton>
        <IconButton><RefreshIcon></RefreshIcon></IconButton>
      </div>
    );
  }
}

export default MenuBar