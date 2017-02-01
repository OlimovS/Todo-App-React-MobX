import React, {Component} from 'react';
import autoBind from 'react-autobind';
import {Link} from 'react-router';
import {inject, observer} from 'mobx-react';
import {FILTERS} from './../common/utils';

@inject('store') @observer
class Filter extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    // handling visibility filter action.
    handleFilterChange(filter) {
        this.props.store.setVisibilityFilter(filter);
    }

    //handle remove completed todos action
    handleRemoveTodo() {
        this.props.store.removeCompletedTodo();
    }

    render() {
        // destructing todos items from props
        let {todos, getTodoStatus} = this.props.store;

        if (todos.length) {
            var filtersElm = (
                <div>
                    <div className="btn-group btn-group-sm">
                        <Link to='/all' activeClassName={'btn-warning'} className="btn btn-default"
                              onClick={this.handleFilterChange.bind(this, FILTERS.ALL)}><span
                            className="badge">{todos.length}</span> ALL</Link>
                        <Link to="/active" activeClassName={'btn-warning'} className="btn btn-default"
                              onClick={this.handleFilterChange.bind(this, FILTERS.ACTIVE)}><span
                            className="badge">{getTodoStatus.activeTodos}</span> ACTIVE</Link>
                        <Link to="/completed" activeClassName={'btn-warning'} className="btn btn-default"
                              onClick={this.handleFilterChange.bind(this, FILTERS.COMPLETED)}><span
                            className="badge">{getTodoStatus.completedTodos}</span> COMPLETED</Link>
                    </div>
                    <button className='btn btn-default btn-sm pull-right'
                            onClick={this.handleRemoveTodo.bind(this)}>REMOVE COMPLETED <span
                        className="badge">{getTodoStatus.completedTodos}</span></button>
                    <hr/>
                </div>
            )
        }
        return (
            <div className="filter-btn-group">
                {filtersElm}
            </div>
        )
    }
}

export default Filter;