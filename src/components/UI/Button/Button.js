import React from 'react';
import './Btutton.css'

const Button = ({ value, callBackFunction, btnStyle, disabled }) => {
    let Style = `Button ${btnStyle}`;
    return (
        <button
            disabled={disabled}
            onClick={callBackFunction}
            className={Style}
        > {value} </button>
    )
}

export default Button;