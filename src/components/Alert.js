import React, {Component} from 'react';

class Alert extends Component {
    //Rendering footer UI
    render() {
        return (
            <div className="alert alert-warning"><strong>WARNING -</strong> {this.props.message}</div>
        )
    }
}

export default Alert;