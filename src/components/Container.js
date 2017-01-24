import React, {Component} from 'react';
import autoBind from 'react-autobind';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import {getCompletedTodos} from './../common/utils';
import './App.css';

class Container extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        const {todos} = this.props;
        const filterTodo = todos.filter(function (todo) {
            switch (this.props.visibilityFilter) {
                case 'COMPLETED':
                    return todo.completed;
                case 'ACTIVE':
                    return !todo.completed;
                default:
                    return todo;
            }
        }, this);

        const todoTextArr = this.props.todos.map(function (item) {
            return item.text
        });

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
                                           onChange={this.props.toggleTodoAll}
                                    />
                                </div>
                                <div className="add-todo-form">
                                    <AddTodo {...this.props}/>
                                </div>
                            </div>
                            <TodoList filterTodo={filterTodo} {...this.props}/>
                        </div>
                        <div className="todo-alert">
                            <hr/>
                            <p>Double-click to edit a todo!</p>
                            <p>Created by <strong>Rakesh Kumar</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;
