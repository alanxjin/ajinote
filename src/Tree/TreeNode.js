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
        this.setState(state => ({ open: !state.open }));
    };
    render(){
        const {data} = this.props;
        let childNodes = [];
        let hasChild = data.nodes != null && data.nodes.length > 0;
        for(let i in data.nodes){
            childNodes.push(<TreeNode data={data.nodes[i]}></TreeNode>);
        }
        if(hasChild){
            return(
                <div>
                    <ListItem button onClick={this.handleClick}>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary={data.value} />
                            {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse className="collapse" in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div">
                            {childNodes}
                        </List>
                    </Collapse>
                </div>
            )
        }
        return (
            <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={data.value} />
            </ListItem> 
        )
    }
}

TreeNode.propTypes = {
    data: PropTypes.array.isRequired,
};
  

export default TreeNode;