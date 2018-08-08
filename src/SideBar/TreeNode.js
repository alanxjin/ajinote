import React, { Component } from 'react';
import './TreeNode.css';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';



class TreeNode extends Component{
    constructor(props) {
        super(props);
        this.state = { open: true };
    }
    
    handleClick = () => {
        const {data, selectedDocIdOnChange, selectedNodeIdOnChange} = this.props;
        this.setState(state => ({ open: !state.open }));
        if(data.type === "file") selectedDocIdOnChange(data.id);
        selectedNodeIdOnChange(data.id);
    };
    render(){
        const {data,selectedDocIdOnChange,selectedNodeIdOnChange, selectedNodeId} = this.props;
        let {padding} = this.props;
        let childNodes = [];
        let hasChild = data.nodes != null && data.nodes.length > 0;
        let isSelected = selectedNodeId === data.id;
        let style = {paddingLeft:`${padding}px`};
        if(isSelected){
            style["backgroundColor"] = "gray";
        }
        for(let i in data.nodes){
            childNodes.push(<TreeNode key={data.nodes[i].id} data={data.nodes[i]} selectedNodeId={selectedNodeId} padding={padding+20} selectedDocIdOnChange={selectedDocIdOnChange} selectedNodeIdOnChange={selectedNodeIdOnChange}></TreeNode>);
        }
        if(hasChild){
            return(
                <div>
                    <ListItem button onClick={this.handleClick} style={style}>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary={data.name} />
                            {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {childNodes}
                        </List>
                    </Collapse>
                </div>
            )
        }
        return (
            <ListItem button onClick={this.handleClick} style={style}>
                <ListItemIcon>
                    {data.type === "file"? <InboxIcon />: <DraftsIcon />} 
                </ListItemIcon>
                <ListItemText primary={data.name} />
            </ListItem> 
        )
    }
}

TreeNode.propTypes = {
    data: PropTypes.object.isRequired,
};
  

export default TreeNode;