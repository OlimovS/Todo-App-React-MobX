import React, {Component} from 'react';
import autoBind from 'react-autobind';
import className from 'classnames';

class Todo extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    // handling toggle todos action
    handleToggleTodo() {
        this.props.store.toggleTodo(this.props.todo.id);
    }

    // handling remove todo action
    handleRemoveTodo() {
        this.props.store.deleteTodo(this.props.index);
    }

    // handling edit todo action
    handleEditTodo() {
        this.props.store.editTodo(this.props.todo.id);
    }

    // handling save the edited todo action
    handleSaveTodo() {
        this.props.store.saveTodo(this.props.todo.id, this.refs.editTodo.value)
    }

    // handling cancel edit todo action
    handleCancelTodo() {
        this.props.store.cancelEditTodo(this.props.todo.id);
    }

    // setting up completed class active on completed todos
    getClassNames() {
        return className({
            'list-group-item': true,
            'todo-wrapper': true,
            'completed': this.props.todo.completed,
            'uncompleted': !this.props.todo.completed
        });
    }

    // handling double click event to enable the edit mode of todo item
    handleDoubleClick(e) {
        e.preventDefault();
        this.handleEditTodo();
    }

    // handling submit event on enter key press
    handleEditSubmit(e) {
        e.preventDefault();
        this.handleSaveTodo();
    }

    // handling cancle editing todo on ESC key press
    handleKeyDown(event) {
        // ESCAPE_KEY = 27;
        if (event.which === 27) {
            this.handleCancelTodo()
        }
    }

    // render todo items UI
    render() {
        const {todo} = this.props;
        let actionBtn = (
            <span onClick={this.handleEditTodo.bind(this)} id="editTodo"
                  className="edit-todo label label-info">Edit</span>
        );

        let renderItem = (
            <em onDoubleClick={this.handleDoubleClick.bind(this)}>{todo.text}</em>
        );

        if (todo.isEdit) {
            actionBtn = (
                <div>
                    <span onClick={this.handleSaveTodo.bind(this)} id="saveTodo"
                          className="save-todo label label-success">Save</span>
                    {' '}
                    <span onClick={this.handleCancelTodo.bind(this)} id="cancelTodo"
                          className="cancel-todo label label-warning">Cancel</span>
                </div>
            );
            renderItem = (
                <form className="edit-todo-form" onSubmit={this.handleEditSubmit.bind(this)}>
                    <input autoFocus className="form-control edit-todo-input" type="text" ref="editTodo"
                           defaultValue={todo.text}
                           onKeyDown={this.handleKeyDown.bind(this)}
                    />
                </form>
            );
        }
        return (
            <li className={this.getClassNames()}>
                <div className="todo-content">
                <span>
                <input type="checkbox" className="todo-checkbox" checked={!!this.props.todo.completed}
                       onChange={this.handleToggleTodo.bind(this)}/>
                    {' '}
                    {renderItem}
                </span>
                </div>
                <div className="action-wrapper">
                    <div className="pull-right action-btns">
                        <ul className="list-inline btn-action">
                            <li>
                                {actionBtn}
                            </li>
                            <li>
                                <span onClick={this.handleRemoveTodo.bind(this)}
                                      className="delete-todo label label-danger">Delete</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        )
    }
}

export default Todo;