import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import App from './components/App';
import './index.css';

import { Provider } from 'mobx-react';
import store from './store/store';

const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/all"/>
                <Route path="/active"/>
                <Route path="/completed"/>
                <IndexRedirect to='/all'/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
