const selectedDocId = (state="", action) => {
    switch(action.type){
        case 'SET_SELECTED_DOC_ID':
            return action.id;
        default:
            return state;
    }
}