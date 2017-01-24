import uuidV1 from 'uuid/v1';
import {getCompletedTodos} from './../common/utils';

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuidV1(),
                    text: action.text,
                    completed: false,
                    isEdit: false
                }
            ];
        case 'DELETE_TODO':
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        case 'TOGGLE_ALL_TODO':
            const activeTodos = getCompletedTodos(state).activeTodos;
            return state.map((todo) => {
                return Object.assign({}, todo, {
                    completed: !!activeTodos
                });
            });
        case 'REMOVE_COMPLETED_TODO':
            return state.filter(todo => !todo.completed);
        case 'EDIT_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        isEdit: true
                    });
                }
                return todo;
            });
        case 'CANCEL_EDITING_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        isEdit: false
                    });
                }
                return todo;
            });
        case 'SAVE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        isEdit: false,
                        text: action.text
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

export default todos;