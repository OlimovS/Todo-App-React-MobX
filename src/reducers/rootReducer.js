/*************
 A reducer is a pure function and takes two things.
 1. The actions (info about what happened)
 2. Copy of current state
 **************/

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

//import sub reducers
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    visibilityFilter,
    todos,
    routing: routerReducer
});

export default rootReducer;