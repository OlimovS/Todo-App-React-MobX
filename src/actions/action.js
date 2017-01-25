import {ACTION_TYPES} from './../common/utils';

export function addTodo(text) {
    return {type: ACTION_TYPES.ADD_TODO, text}
}

export function editTodo(id) {
    return {type: ACTION_TYPES.EDIT_TODO, id}
}

export function saveTodo(id, text) {
    return {type: ACTION_TYPES.SAVE_TODO, id, text}
}

export function cancelEditTodo(id) {
    return {type: ACTION_TYPES.CANCEL_EDITING_TODO, id}
}

export function deleteTodo(id) {
    return {type: ACTION_TYPES.DELETE_TODO, id}
}

export function toggleTodo(id) {
    return {type: ACTION_TYPES.TOGGLE_TODO, id}
}

export function toggleTodoAll() {
    return {type: ACTION_TYPES.TOGGLE_ALL_TODO}
}

export function removeCompletedTodo() {
    return {type: ACTION_TYPES.REMOVE_COMPLETED_TODO}
}

export function setVisibilityFilter(filter) {
    return {type: ACTION_TYPES.VISIBILITY_FILTER, filter}
}