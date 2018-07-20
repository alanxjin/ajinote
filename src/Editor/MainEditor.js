import './MainEditor.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from 'draft-js-plugins-editor';
import {EditorState ,convertToRaw,convertFromRaw} from 'draft-js';
import createMarkdownPlugin from 'draft-js-markdown-plugin';
import createMathjaxPlugin from 'draft-js-mathjax-plugin'

const plugins = [createMarkdownPlugin(),createMathjaxPlugin()];
class MainEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: props.editorState?
                  EditorState.createWithContent(convertFromRaw(JSON.parse(props.editorState)))
                  :EditorState.createEmpty()};
  }
  
  onChange = (editorState) =>{
    this.setState({editorState});
    this.saveContent(editorState.getCurrentContent());
  }

  saveContent = (content) => {
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  }

  render() {
    return (
      <div className="MainEditor">
        <Editor editorState={this.state.editorState}  
                onChange={this.onChange}
                plugins={plugins} />
      </div>
   
    );
  }
}

MainEditor.propTypes = {
  editorState: PropTypes.object,
};

export default MainEditor;
