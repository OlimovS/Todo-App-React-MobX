import React, {Component} from 'react';
import autoBind from 'react-autobind';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const inputValue = this.refs.todoInput.value.trim();
        if (inputValue) {
            this.props.addTodo(inputValue);
            this.refs.addTodoForm.reset();
        }
    }

    render() {
        return (
            <form ref="addTodoForm" onSubmit={this.handleSubmit} className="add-todo-form">
                <input type="text" ref="todoInput" placeholder="What need to be done?"
                       className="form-control add-todo"/>
                <button hidden className="btn-add-todo" type="submit">+ Add Todo</button>
            </form>
        )
    }
}

export default AddTodo;