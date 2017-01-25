import React, {Component} from 'react';
import autoBind from 'react-autobind';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import Footer from './Footer';
import {getCompletedTodos, FILTERS} from './../common/utils';
import './App.css';

class Container extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    // handling toggle all todos action
    handleToggleAll() {
        this.props.toggleTodoAll();
    }

    //rendering container component content
    render() {
        // Destructing todos from props.
        const {todos} = this.props;

        // Filter todos list according to the filter(all, active or completed) selected from UI.
        const filterTodo = todos.filter(function (todo) {
            switch (this.props.visibilityFilter) {
                case FILTERS.COMPLETED:
                    return todo.completed;
                case FILTERS.ACTIVE:
                    return !todo.completed;
                default:
                    return todo;
            }
        }, this);

        // created array of todos text.
        const todoTextArr = this.props.todos.map(function (item) {
            return item.text
        });

        // Checking for duplicate item from todosTextArr and enable the warning alert box.
        let isDuplicate = todoTextArr.some(function (item, idx) {
            return todoTextArr.indexOf(item) !== idx
        });

        const renderWarning = (
            <div className="alert alert-warning"><strong>WARNING - </strong> Todo List contain duplicate items. Please
                remove duplicate item/items</div>
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-push-2">
                        <div className="filter-todo">
                            <Filter {...this.props}/>
                        </div>
                        {isDuplicate ? renderWarning : ''}
                        <div className="panel panel-warning todo-panel">
                            <div className="panel-heading">
                                <div className="toggle-all">
                                    <input type="checkbox" className="todo-checkbox"
                                           disabled={!todos.length}
                                           checked={!getCompletedTodos(todos).activeTodos && todos.length}
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
