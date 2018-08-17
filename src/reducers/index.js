import {combineReducers} from 'redux';
import tree from './tree';
import selectedNodeId from './selectedNodeId';
import selectedDocId from './selectedDocId';
import docs from './docs';

export default combineReducers({
    tree,
    selectedDocId,
    selectedNodeId,
    docs
})