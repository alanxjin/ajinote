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
    this.state = {editorState:this._createEditorStateWithContent(this._convertFromSaveData(props.editorStateSaveData))};
  }
  
  _createEditorStateWithContent = (content) => {
    if(content){
      return EditorState.createWithContent(content);
    }else{
      return EditorState.createEmpty();
    }
  }

  _convertFromSaveData = (data) => {
    return convertFromRaw(JSON.parse(data));
  }

  _convertToSaveData = (data) => {
    return JSON.stringify(convertToRaw(data));
  }


  componentWillReceiveProps(nextProps){
    let {editorStateSaveData} = nextProps;
    this.setState({editorState:this._createEditorStateWithContent(this._convertFromSaveData(editorStateSaveData))});
  }

  onChange = (editorState) =>{
    console.log("===Editor Content Changed===");
    this.setState({editorState});
    this.saveContent(editorState.getCurrentContent());
  }

  saveContent = (content) => {
    console.log("===Save Data===");
    window.localStorage.setItem('content', this._convertToSaveData(content));
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
