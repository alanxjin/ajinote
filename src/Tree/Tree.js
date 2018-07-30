import './Tree.css';
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import TreeNode from './TreeNode';

class Tree extends Component{
    constructor(props) {
        super(props);
        this.state = { open: true };
    }
   
    render(){
      const {store} = this.props;
        return(
            <div className="Tree">
                <List component="div" disablePadding>
                    <TreeNode data={store.get("indice")} padding={20}></TreeNode>
                </List>
            </div>
        )
    }
}

export default Tree;