export function addTodo(text) {
    return {type: 'ADD_TODO', text}
}

export function editTodo(id) {
    return {type: 'EDIT_TODO', id}
}

export function saveTodo(id, text) {
    return {type: 'SAVE_TODO', id, text}
}

export function cancelEditTodo(id) {
    return {type: 'CANCEL_EDITING_TODO', id}
}

export function deleteTodo(id) {
    return {type: 'DELETE_TODO', id}
}

export function toggleTodo(id) {
    return {type: 'TOGGLE_TODO', id}
}

export function toggleTodoAll() {
    return {type: 'TOGGLE_ALL_TODO'}
}

export function removeCompletedTodo() {
    return {type: 'REMOVE_COMPLETED_TODO'}
}

export function setVisibilityFilter(filter) {
    return {type: 'VISIBILITY_FILTER', filter}
}