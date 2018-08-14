import Util from '../utility/util';

let testId = 0

//generateUniqueId = () => {
//    Util.generateId
//}

export const addFile = name => ({
    type: 'ADD_FILE',
    id: testId++,
    name
})

export const addFolder = name =>({
    type: 'ADD_FOLDER',
    id: testId++,
    name
})

export const deleteItem = id =>({
    type: 'DELETE_ITEM',
    id
})

export const renameItem = (id, name) =>({
    type: 'RENAME_ITEM',
    id,
    name
})

export const toggleFolder = id => ({
    type: 'TOGGLE_FOLDER',
    id
})