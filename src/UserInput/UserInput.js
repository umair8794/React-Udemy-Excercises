import React from 'react';

const UserInput = (props) => {
    return (
        <input type="text" placeholder="Input" value={props.userName} onChange={props.inputChange} />
    );
};

export default UserInput;