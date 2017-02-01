import React, {Component} from 'react';
import autoBind from 'react-autobind';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import Footer from './Footer';
import Alert from './Alert';
import {inject, observer} from 'mobx-react';
import {WARNING_MSG} from './../common/utils';
import './App.css';

@inject('store') @observer
class Container extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    // handling toggle all todos action
    handleToggleAll() {
        this.props.store.toggleTodoAll();
    }

    //rendering container component content
    render() {
        // Destructing todos from props.
        const {todos, filterTodo, getTodoStatus, isDuplicateTodo} = this.props.store;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-push-2">
                        <div className="filter-todo">
                            <Filter {...this.props}/>
                        </div>
                        {isDuplicateTodo ? <Alert message={WARNING_MSG}/> : ''}
                        <div className="panel panel-warning todo-panel">
                            <div className="panel-heading">
                                <div className="toggle-all">
                                    <input type="checkbox" className="todo-checkbox"
                                           disabled={!todos.length}
                                           checked={!getTodoStatus.activeTodos && todos.length}
                                           onChange={this.handleToggleAll.bind(this)}
                                    />
                                </div>
                                <div className="add-todo-form">
                                    {/* Add todo component */}
                                    <AddTodo {...this.props}/>
                                </div>
                            </div>
                            {/*Todos list component*/}
                            <TodoList filterTodo={filterTodo} {...this.props}/>
                        </div>
                        {/* Footer Component */}
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;
