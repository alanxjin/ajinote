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

  componentWillMount(){
    this.updateEditorState(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.updateEditorState(nextProps);
  }

  updateEditorState = (props)=>{
    const {store, selectedDocId} = props;
    const docs = store.get("docs");
    let editorState;
    if(selectedDocId != ""){
      const content = convertFromRaw(JSON.parse(docs[selectedDocId]));
      editorState = EditorState.createWithContent(content);
    }else{
      editorState = EditorState.createEmpty();
    }
    this.setState({
      editorState: editorState
    })
  }


  onChange = (editorState) =>{
    console.log("===Editor Content Changed===");
    const {selectedDocId, selectedNodeId,selectedNodeIdOnChange} = this.props;
    this.setState({editorState});
    this.saveContent(editorState.getCurrentContent());
    if(selectedDocId != selectedNodeId){
      selectedNodeIdOnChange(selectedDocId);
    }
  }

  saveContent = (content) => {
    console.log("===Save Data===");
    const {store, selectedDocId} = this.props;
    let docs = store.get("docs");
    docs[selectedDocId] = JSON.stringify(convertToRaw(content));
    store.set("docs", docs);
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
