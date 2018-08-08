import './MainEditor.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from 'draft-js-plugins-editor';
import {EditorState ,convertToRaw,convertFromRaw} from 'draft-js';
import createMarkdownPlugin from 'draft-js-markdown-plugin';
import createMathjaxPlugin from 'draft-js-mathjax-plugin'
import Util from '../utility/util';

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
    const nextId = nextProps.selectedDocId;
    const thisId = this.props.selectedDocId;
    if(nextId != thisId){
      this.saveContent();
      this.updateEditorState(nextProps);
    }
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload)
  }

  onUnload = ()=>{
    this.saveContent();
  }

  updateEditorState = (props) => {
    const {docs, selectedDocId} = props;
    let editorState;
    if(selectedDocId in docs){
      const content = convertFromRaw(JSON.parse(docs[selectedDocId]));
      editorState = EditorState.createWithContent(content);
    }else{
      editorState = EditorState.createEmpty();
    }
    // if(selectedDocId != ""){
      
    // }else{
      
    // }
    this.setState({
      editorState: editorState
    })
  }


  onChange = (editorState) =>{
    console.log("===Editor Content Changed===");
    const {selectedDocId, selectedNodeId,selectedNodeIdOnChange} = this.props;
    if(selectedDocId != ""){
      this.setState({editorState});
    }

    
    // This deals with situation when the node is on other folder, 
    // edit the file will bring back the node to the current file
    // 
    // ToDo:
    // Unfold the tree to the current file when bring back the node. 
    if(selectedDocId != selectedNodeId){
      selectedNodeIdOnChange(selectedDocId);
    }
  }

  saveContent = () => {
    console.log("===Save Data===");
    const {docs, saveData, selectedDocId} = this.props;
    const {editorState} = this.state;
    let content = editorState.getCurrentContent();
    let newDocs = Util.clone(docs);
    newDocs[selectedDocId] = JSON.stringify(convertToRaw(content));
    saveData("docs", newDocs);
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
