import React, { Component } from 'react';

class ValidationComponent extends Component {
    render() {
        const message = this.props.inputLength >= 5
        ? 'Text long enough'
        : 'Text too short';
        return <p>{ message }</p>;
    }
}

export default ValidationComponent;