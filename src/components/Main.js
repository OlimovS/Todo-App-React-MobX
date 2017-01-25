import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import all action as 'actionCreators' from action
import * as actionCreators from './../actions/action';
// import presentational app component to bind with connect so we can access all the props from parent component.
import App from './App';

// binding all states to props
function mapStateToProps(state) {
    return {
        visibilityFilter: state.visibilityFilter,
        todos: state.todos
    }
}

// binding all actions to props
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// connecting state and props to app component
const Main = connect(mapStateToProps, mapDispatchToProps)(App);

export default Main;