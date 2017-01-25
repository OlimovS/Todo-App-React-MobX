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
    const activeTodos = todos.reduce((accum, todo) => {
        return todo.completed ? accum : accum + 1;
    }, 0);
    const completedTodos = todos.length - activeTodos;
    return {activeTodos, completedTodos}
}