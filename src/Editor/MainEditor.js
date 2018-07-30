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
    this.state = {editorState:EditorState.createEmpty()};
  }

  componentDidMount(){
    this.updateEditorState(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.updateEditorState(nextProps);
  }

  updateEditorState = (props)=>{
    const {store, selectedDocId} = props;
    const docs = store.get("docs");
    const editorState = this.createEditorState(docs[selectedDocId]);
    this.setState({
      editorState: editorState
    })
  }

  createEditorState = (data) => {
    const content = convertFromRaw(JSON.parse(data));
    if(content){
      return EditorState.createWithContent(content);
    }else{
      return EditorState.createEmpty();
    }
  }

  onChange = (editorState) =>{
    console.log("===Editor Content Changed===");
    this.setState({editorState});
    this.saveContent(editorState.getCurrentContent());
  }

  saveContent = (content) => {
    console.log("===Save Data===");
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
