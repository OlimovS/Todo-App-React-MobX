import uuidV1 from 'uuid/v1';
import {getCompletedTodos, ACTION_TYPES} from './../common/utils';

function todos(state = [], action) {
    switch (action.type) {

        //Add new todo
        case ACTION_TYPES.ADD_TODO:
            return [
                ...state,
                {
                    id: uuidV1(),
                    text: action.text,
                    completed: false,
                    isEdit: false
                }
            ];

        // Delete todo
        case ACTION_TYPES.DELETE_TODO:
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];

        // Toggle todo
        case ACTION_TYPES.TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });

        // Toggle all todo
        case ACTION_TYPES.TOGGLE_ALL_TODO:
            const activeTodos = getCompletedTodos(state).activeTodos;
            return state.map((todo) => {
                return Object.assign({}, todo, {
                    completed: !!activeTodos
                });
            });

        // Remove completed todos
        case ACTION_TYPES.REMOVE_COMPLETED_TODO:
            return state.filter(todo => !todo.completed);

        // Enabling edit todo input
        case ACTION_TYPES.EDIT_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        isEdit: true
                    });
                }
                return todo;
            });

        // Canceling edit todo
        case ACTION_TYPES.CANCEL_EDITING_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        isEdit: false
                    });
                }
                return todo;
            });

        // Save edited todo
        case ACTION_TYPES.SAVE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        isEdit: false,
                        text: action.text
                    });
                }
                return todo;
            });

        // return default state in case of no matched action found.
        default:
            return state;
    }
}

export default todos;