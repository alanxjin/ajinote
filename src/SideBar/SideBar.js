import './SideBar.css';
import React, { Component } from 'react';
import Tree from '../Tree/Tree';

class SideBar extends Component {

  render() {
    
    return (
      <div className="SideBar">
        <Tree {...this.props}></Tree>
      </div>
    );
  }
}

export default SideBar;
