import Util from '../utility/util';

const tree = (state={'root':{},'ids':{}}, action) =>{
    let newRoot = Util.clone(state.root);
    let selectedNode;
    switch(action.type){
        case 'ADD_FILE' || 'ADD_FOLDER':
            selectedNode = Util.findNode(newRoot, action.parentId);
            if(selectedNode != null){
                if(selectedNode.type === "folder"){
                  let newIds = Util.clone(state.ids);
                  let newId = Util.generateId();
                  let type = action.type == 'ADD_FILE'? 'file': 'folder';
                  while(newId in state.ids){
                    newId = Util.generateId();
                  }
                  newIds.push(newId);

                  selectedNode.nodes.push(Util.createNewNode(newId, action.name, type));
                  return {'root':newRoot, 'ids':newIds};
                }
            }
            return state;
        case 'DELETE_ITEM':
            let newIds = Util.clone(state.ids);
            let parentNode = Util.findParent(newRoot, action.id);

            if(parentNode != null){
              let childNodeIndex = parentNode.nodes.findIndex((obj) => obj.id === action.id);
              let idIndex = newIds.indexOf(action.id);

              parentNode.nodes.splice(childNodeIndex,1);
              newIds.splice(idIndex, 1);
              return {'root':newRoot, 'ids':newIds};
            }
            return state;
        case 'RENAME_ITEM':
            selectedNode = Util.findNode(newRoot, action.id);
            if(selectedNode != null){
                selectedNode.name = action.name;
                return {'root':newRoot, 'ids':state.ids}
            }
            return state;
        case 'TOGGLE_FOLDER':
            selectedNode = Util.findNode(newRoot, action.id);
            if(selectedNode != null){
                selectedNode.foldOpen = !selectedNode.foldOpen;
                return {'root':newRoot, 'ids':state.ids}
            }
            return state;
        default:
            return state
    }

}

export default tree