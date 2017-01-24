/*************
 A reducer is a pure function and takes two things.
 1. The actions (info about what happened)
 2. Copy of current state
 **************/

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

//import sub reducers
import todos from './todos';
import nowShowing from './nowShowing';
import isDublicate from './isDublicate';
import allCompleted from './allCompleted';

const rootReducer = combineReducers({
    nowShowing,
    allCompleted,
    isDublicate,
    todos,
    routing: routerReducer
});

export default rootReducer;