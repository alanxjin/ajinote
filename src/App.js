import './App.css';
import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import {EditorState} from 'draft-js';
import createMarkdownPlugin from 'draft-js-markdown-plugin';
import createMathjaxPlugin from 'draft-js-mathjax-plugin'

const plugins = [createMarkdownPlugin(),createMathjaxPlugin()];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  
  }
  onChange = (editorState) =>{
    this.setState({editorState});
  }

  render() {
    return (
      <div className="App">
        <Editor editorState={this.state.editorState}  
                onChange={this.onChange}
                plugins={plugins} />
      </div>
   
    );
  }
}

export default App;
