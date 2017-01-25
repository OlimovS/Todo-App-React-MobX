import React, {Component} from 'react';

class Footer extends Component {
    //Rendering footer UI
    render() {
        return (
            <div className="todo-footer">
                <hr/>
                <p>Double-click to edit a todo!</p>
                <p>Created by <strong>
                    <a href="https://github.com/rakeshongithub/Todo-App-React-Redux"
                       target="_blank">Rakesh Kumar</a>
                </strong>
                </p>
            </div>
        )
    }
}

export default Footer;