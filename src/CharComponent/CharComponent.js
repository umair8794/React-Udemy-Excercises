import React, { Component } from 'react';
import './CharComponent.css';

class CharComponent extends Component {
    render() {
        const {
            click,
            index,
            character
        } = this.props;
        return (
            <li
                className="char"
                onClick={() => click(index)}>
                { character }
            </li>
        );
    }
}

export default CharComponent;