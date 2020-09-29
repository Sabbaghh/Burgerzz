import React from 'react';
import './Btutton.css'

const Button = ({ value, callBackFunction, btnStyle }) => {

    let Style = `Button ${btnStyle}`;
    return (
        <button
            onClick={callBackFunction}
            className={Style}
        > {value} </button>
    )
}

export default Button;