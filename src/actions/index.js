import Util from '../utility/util';

let testId = 0

//generateUniqueId = () => {
//    Util.generateId
//}

export const addItem = (parentId, name, type) => ({
    type: 'ADD_ITEM',
    parentId,
    name,
    type
})

// export const addFile = (parentId, name) => ({
//     type: 'ADD_FILE',
//     id: testId++,
//     parentId,
//     name
// })

// export const addFolder = (parentId, name) =>({
//     type: 'ADD_FOLDER',
//     id: testId++,
//     parentId,
//     name
// })

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