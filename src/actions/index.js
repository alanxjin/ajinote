
export const addFile = (parentId, name) => ({
    type: 'ADD_FILE',
    parentId,
    name,
})

export const addFolder = (parentId, name) => ({
    type: 'ADD_FOLDER',
    parentId,
    name,
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

export const setSelectedNodeId = id => ({
    type: 'SET_SELECTED_NODE_ID',
    id
})

export const setSelectedDocId = id => ({
    type: 'SET_SELECTED_DOC_ID',
    id
})

export const setDoc = (id, content) => ({
    type: 'SET_DOC',
    id,
    content
})