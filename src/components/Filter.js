import React, {Component} from 'react';
import autoBind from 'react-autobind';
import {Link} from 'react-router';
import {getCompletedTodos} from './../common/utils';
import {FILTERS_TODO} from './../common/utils'

class Filter extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    onFilterChange(filter) {
        this.props.setVisibilityFilter(filter);
    }

    render() {
        let {todos} = this.props;
        if (todos.length) {
            var filtersElm = (
                <div>
                    <div className="btn-group btn-group-sm">
                        <Link to='/all' activeClassName={'btn-warning'} className="btn btn-default"
                              onClick={this.onFilterChange.bind(this, FILTERS_TODO.ALL)}><span
                            className="badge">{todos.length}</span> ALL</Link>
                        <Link to="/active" activeClassName={'btn-warning'} className="btn btn-default"
                              onClick={this.onFilterChange.bind(this, FILTERS_TODO.ACTIVE)}><span
                            className="badge">{getCompletedTodos(todos).activeTodos}</span> ACTIVE</Link>
                        <Link to="/completed" activeClassName={'btn-warning'} className="btn btn-default"
                              onClick={this.onFilterChange.bind(this, FILTERS_TODO.COMPLETED)}><span
                            className="badge">{getCompletedTodos(todos).completedTodos}</span> COMPLETED</Link>
                    </div>
                    <button className='btn btn-default btn-sm pull-right'
                            onClick={this.props.removeCompletedTodo}>REMOVE COMPLETED <span
                        className="badge">{getCompletedTodos(todos).completedTodos}</span></button>
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