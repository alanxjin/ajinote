import './App.css';
import React, { Component } from 'react';
import MainEditor from './Editor/MainEditor';
import SideBar from './SideBar/SideBar';

const App = () => (
    <div className="App">
        <SideBar/>
        <MainEditor/>
    </div> 
)

export default App;
