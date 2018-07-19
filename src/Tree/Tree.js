import './Tree.css';
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import TreeNode from './TreeNode';

const tree = {value:'Root',
    nodes:[
    {
      value: 'A',
      nodes: [{ value: 'B' }, { value: 'C' }],
    },
    {
      value: 'D',
      nodes: [
        {
          value: 'E',
        },
        {
          value: 'F',
          nodes: [
            { value: 'G' },
            { value: 'H' },
            { value: 'I' },
          ],
        },
      ],
    },
  ]};

class Tree extends Component{
    constructor(props) {
        super(props);
        this.state = { open: true };
    }
   
    render(){
        return(
            <div className="Tree">
                <List>
                    <TreeNode data={tree}></TreeNode>
                </List>
            </div>
        )
    }
}

export default Tree;