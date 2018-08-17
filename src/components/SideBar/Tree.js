import './Tree.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import TreeNode from './TreeNode';
import { setSelectedNodeId, setSelectedDocId, toggleFolder} from '../../actions';

class Tree extends Component{

    render(){
      const {root, setSelectedDocId, setSelectedNodeId, selectedNodeId, toggleFolder} = this.props;
        return(
            <div className="Tree">
                <List component="div" disablePadding>
                    <TreeNode data={root} padding={20} selectedNodeId={selectedNodeId} selectedDocIdOnChange={setSelectedDocId} selectedNodeIdOnChange={setSelectedNodeId} toggleFolder={toggleFolder}></TreeNode>
                </List>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    'selectedNodeId': state.selectedNodeId,
    'root': state.tree.root
})
  
const mapDispatchToProps = dispatch  => ({
    setSelectedNodeId: (id) => dispatch(setSelectedNodeId(id)),
    setSelectedDocId: (id) => dispatch(setSelectedDocId(id)),
    toggleFolder:(id) => dispatch(toggleFolder(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tree);