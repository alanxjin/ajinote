import Util from '../utility/util';

const docs = (state={}, action) => {
    switch(action.type){
        case 'SET_DOC':
            let newState = Util.clone(state);
            newState[action.id] = action.content;
            return newState;
        default:
            return state;
    }
}

export default docs;