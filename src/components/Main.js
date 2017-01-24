import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './../actions/action';

import App from './App';

function mapStateToProps(state) {
    return {
        nowShowing: state.nowShowing,
        allCompleted: state.allCompleted,
        isDublicate: state.isDublicate,
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App);

export default Main;