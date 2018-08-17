import React, { Component } from 'react';
import { connect } from 'react-redux'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { addFile, addFolder, deleteItem,renameItem } from '../../actions';

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
    this.setState({inputShown:true, action:{type: "addFile", name: "New File"}});
  }

  addFolderButtonOnClick = ()=>{
    this.setState({inputShown:true, action:{type: "addFolder", name: "New Folder"}});
  }

  renameButtonOnClick = ()=>{
    this.setState({inputShown:true, action:{type: "rename", name: "Rename"}});
  }

  deleteButtonOnClick = ()=>{
    this.setState({inputShown:true, action:{type: "delete", name: "Delete the item?"}});
    
  }

  onInputChange = (event) =>{
    this.setState({inputValue: event.target.value});
  }

  onButtonConfirm = () =>{
    const {action, inputValue} = this.state;
    const {addFileInTree, addFolderInTree, deleteInTree,renameInTree, selectedNodeId} = this.props;
    let id = selectedNodeId;
    if(action.type === "addFile"){
      addFileInTree(id, inputValue);
    }else if(action.type === "addFolder"){
      addFolderInTree(id, inputValue);
    }else if(action.type ==="rename"){
      renameInTree(id,inputValue);
    }else if(action.type === "delete"){
      deleteInTree(id);
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

  render() {
    const {inputShown, inputValue, action} = this.state;
    return (
      <div className="MenuBar">
        <IconButton style={{margin:"5px"}} onClick={this.addFileButtonOnClick}><NoteAddOutlinedIcon></NoteAddOutlinedIcon></IconButton>
        <IconButton style={{margin:"5px"}} onClick={this.addFolderButtonOnClick}><CreateNewFolderOutlinedIcon></CreateNewFolderOutlinedIcon></IconButton>
        <IconButton style={{margin:"5px"}} onClick={this.renameButtonOnClick}><EditIcon></EditIcon></IconButton>
        <IconButton style={{margin:"5px"}} onClick={this.deleteButtonOnClick}><DeleteOutlinedIcon></DeleteOutlinedIcon></IconButton>
        {inputShown?
          <div>
            <TextField disabled={action.type === "delete"}style={{marginLeft:"35px", marginBottom:"10px"}} label={action.name} value={inputValue} onChange={this.onInputChange}></TextField>
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


const mapStateToProps = state => ({
  'selectedNodeId': state.selectedNodeId
})

const mapDispatchToProps = dispatch  => ({
  addFileInTree: (parentId, name) => dispatch(addFile(parentId, name)),
  addFolderInTree: (parentId, name) => dispatch(addFolder(parentId, name)),
  renameInTree: (id, name) => dispatch(renameItem(id, name)),
  deleteInTree: (id) => dispatch(deleteItem(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)