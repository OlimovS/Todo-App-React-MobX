import React, {Component} from 'react';
import autoBind from 'react-autobind';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    // Handle submit event whenever user enter new todoItem
    handleSubmit(e) {
        e.preventDefault();
        //grabbing new todo text using refs.
        const text = this.refs.todoInput.value.trim();
        if (text) {
            //trigger action to add newTodo.
            this.props.store.addTodo(text);
            //reset form after submitted newTodo.
            this.refs.addTodoForm.reset();
        }
    }

    // Render add todo form
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