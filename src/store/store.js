import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import root reducer
import rootReducer from './../reducers/rootReducer';

const initialState = {
    nowShowing: 'ALL',
    allCompleted: false,
    isDublicate: false,
    todos: [{
        id:1,
        text:'rasfdsdfasdfasf',
        completed:false,
        isEdit:false
    }]
};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);

export {history};

export default store;
