export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

export function editTodo(todoId, newText) {
    return {
        type: 'EDIT_TODO',
        todoId,
        newText
    }
}

export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export function toggleTodoAll() {
    return {
        type: 'TOGGLE_ALL_TODO'
    }
}

export function removeCompletedTodo() {
    return {
        type: 'REMOVE_COMPLETED_TODO'
    }
}