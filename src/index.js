import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect} from 'react-router';
import Main from './components/Main';
import './index.css';

import {Provider} from'react-redux';
import store, {history} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <Route path="/all"/>
                <Route path="/active"/>
                <Route path="/completed"/>
                <IndexRedirect to='/all'/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
