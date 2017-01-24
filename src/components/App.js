import React, {Component} from 'react';
import Container from './Container';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <Container {...this.props} />
            </div>
        );
    }
}

export default App;
