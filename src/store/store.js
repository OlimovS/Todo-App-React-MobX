import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import root reducer
import rootReducer from './../reducers/rootReducer';

// setting up initial state of app
const initialState = {
    visibilityFilter: 'ALL',
    todos: []
};

// creating store using create store
// window.__REDUX_DEVTOOLS_EXTENSION__() is used to enable to redux devtool.
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// setting up browser history
const history = syncHistoryWithStore(browserHistory, store);

export {history};

export default store;
