import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Container from './Container';
import logo from '../logo.svg';
import './App.css';

@inject('store') @observer
class App extends Component {
    //render app header and container component.
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
