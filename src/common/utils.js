export const FILTERS = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
};

export const ACTION_TYPES = {
    ADD_TODO: 'ADD_TODO',
    EDIT_TODO: 'EDIT_TODO',
    SAVE_TODO: 'SAVE_TODO',
    CANCEL_EDITING_TODO: 'CANCEL_EDITING_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    TOGGLE_ALL_TODO: 'TOGGLE_ALL_TODO',
    REMOVE_COMPLETED_TODO: 'REMOVE_COMPLETED_TODO',
    VISIBILITY_FILTER: 'VISIBILITY_FILTER'
};

export function getCompletedTodos(todos) {
    const activeTodos = todos.reduce(function (accum, todo) {
        return todo.completed ? accum : accum + 1;
    }, 0);
    const completedTodos = todos.length - activeTodos;
    return {activeTodos, completedTodos}
}

export function getTodoItem(todoId, _callBack) {
    return this.props.todos.map((todo) => {
        if (todoId === todo.id || !todoId) {
            return _callBack(todo);
        }
        return todo;
    });
}

export function setAppState(todoId, _fn) {
    this.setState({
        todos: getTodoItem.call(this, todoId, _fn)
    });
}