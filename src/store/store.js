import {observable, computed, action} from 'mobx'
import uuidV1 from 'uuid/v1';
import {FILTERS} from './../common/utils';

// setting up initial state of app
class TodoStore {

    // observable states
    @observable visibilityFilter;
    @observable todos;

    // Intial states
    constructor() {
        this.visibilityFilter = 'ALL';
        this.todos = [];
    }

    // Check duplicate todos item
    @computed get isDuplicateTodo(){
        // created array of todos text.
        const todoTextArr = this.todos.map(todo => todo.text);
        // Checking for duplicate item from todosTextArr and enable the warning alert box.
        return todoTextArr.some((item, id) => {
            return todoTextArr.indexOf(item) !== id;
        });
    }

    // Get Completed and Active Todos Status
    @computed get getTodoStatus() {
        const activeTodos = this.todos.reduce((accum, todo) => {
            return todo.completed ? accum : accum + 1;
        }, 0);
        const completedTodos = this.todos.length - activeTodos;
        return {activeTodos, completedTodos}
    }

    // Get Filtered Todos
    @computed get filterTodo(){
        return this.todos.filter(todo => {
            switch (this.visibilityFilter) {
                case FILTERS.COMPLETED:
                    return todo.completed;
                case FILTERS.ACTIVE:
                    return !todo.completed;
                default:
                    return todo;
            }
        });
    }

    // Set Filter
    @action('SET VISIBILITY FILTER') setVisibilityFilter(filter) {
        this.visibilityFilter = filter;
    }

    // Add Todos
    @action('ADD TODO') addTodo(text) {
        this.todos = [
            ...this.todos,
            {
                id: uuidV1(),
                text: text,
                completed: false,
                isEdit: false
            }
        ]
    }

    // Toggle Todos
    @action('TOGGLE TODO') toggleTodo(todoId) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === todoId) {
                return Object.assign({}, todo, {
                    completed: !todo.completed
                });
            }
            return todo;
        });
    }

    // Toggle All Todos
    @action('TOGGLE ALL TODOS') toggleTodoAll() {
        const activeTodos = this.getTodoStatus.activeTodos;
        this.todos = this.todos.map((todo) => {
            return Object.assign({}, todo, {
                completed: !!activeTodos
            });
        });
    }

    // Remove Completed Todos
    @action('REMOVE COMPLETED TODO') removeCompletedTodo() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }

    // Delete Todos
    @action('DELETE TODO') deleteTodo(todoId) {
        this.todos = [
            ...this.todos.slice(0, todoId),
            ...this.todos.slice(todoId + 1)
        ];
    }

    // Edit Todos
    @action('EDIT TODO') editTodo(todoId) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === todoId) {
                return Object.assign({}, todo, {
                    isEdit: true
                });
            }
            return todo;
        });
    }

    // Cancel Edit Todos
    @action('CANCEL EDIT TODO') cancelEditTodo(todoId) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === todoId) {
                return Object.assign({}, todo, {
                    isEdit: false
                });
            }
            return todo;
        });
    }

    // Save Todos
    @action('SAVE TODO') saveTodo(todoId, text) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === todoId) {
                return Object.assign({}, todo, {
                    isEdit: false,
                    text: text
                });
            }
            return todo;
        });
    }

}

const store = new TodoStore();

export default store;
