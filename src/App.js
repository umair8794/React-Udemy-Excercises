import React, { Component } from 'react';

import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        input: ''
    };

    handleInputChange = (event) => {
        this.setState({
            input: event.currentTarget.value
        });
    };

    handleCharacterClick = (index) => {
        let characters = this.state.input.split('');
        characters.splice(index, 1);
        const input = characters.join('');
        this.setState({
            input: input
        });
    };

    render() {
        const inputLength = this.state.input ? this.state.input.length : 0;
        let charComponents = null;

        if (inputLength) {
            const characters = this.state.input.split('');
            console.log(characters);
            charComponents = (
                <ul>
                    {characters.map((character, index) => (
                        <CharComponent
                            key={index}
                            index={index}
                            character={character}
                            click={this.handleCharacterClick}
                        />
                    ))}
                </ul>
            );
        }

        return (
            <div className="App">
                <input
                    type="text"
                    placeholder="Enter any text"
                    value={this.state.input}
                    onChange={this.handleInputChange}
                />
                <p>Text Length: { inputLength }</p>
                <ValidationComponent inputLength={inputLength} />
                { charComponents }
            </div>
        );
    }
}

export default App;
