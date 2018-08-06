import './SideBar.css';
import React, { Component } from 'react';
import Tree from './Tree';
import MenuBar from './MenuBar';

class SideBar extends Component {

  render() {
    
    return (
      <div className="SideBar">
        <MenuBar {...this.props}></MenuBar>
        <Tree {...this.props}></Tree>
      </div>
    );
  }
}

export default SideBar;
