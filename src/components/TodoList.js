import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props);
        autoBind(this);
    }
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.filterTodo.map((todo, index) => {
                       return <Todo key={index} index={index} todo={todo} {...this.props} />
                    })
                }
            </ul>
        )
    }
}

export default TodoList;