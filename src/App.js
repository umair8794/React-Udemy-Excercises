import React, { Component } from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
    state = {
        username: 'abcde'
    };

    handleInputChange = (event) => {
        this.setState({
            username: event.currentTarget.value
        })
    };

    render() {
        return (
            <div className="App">
                <UserInput userName={this.state.username} inputChange={this.handleInputChange} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
            </div>
        );
    }
}

export default App;
