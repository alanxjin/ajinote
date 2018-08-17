const selectedNodeId = (state="", action) => {
    switch(action.type){
        case 'SET_SELECTED_NODE_ID':
            return action.id;
        default:
            return state;
    }
}