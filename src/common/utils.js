export const FILTERS_TODO = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
    REMOVE_COMPLETED: 'REMOVE COMPLETED'
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