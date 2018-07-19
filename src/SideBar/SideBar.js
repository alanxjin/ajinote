import './SideBar.css';
import React, { Component } from 'react';
import Tree from '../Tree/Tree';


class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    
    return (
      <div className="SideBar">
        <Tree></Tree>
      </div>
    );
  }
}

export default SideBar;
