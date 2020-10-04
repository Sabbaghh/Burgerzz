import React from 'react';
import './Input.css'
export const input = (props) => {

    //check validation
    let isValid = () => {
        if (!props.validation) {
            console.log('lol')
        }
    }

    let inputElement = null;
    switch (props.elemntType) {
        case 'input':
            inputElement = <input
                name={props.name}
                className='inputElement'
                {...props.elemntConfig}
                value={props.value}
                onChange={(e) => props.callBackFunction(e, props.name)}
                onBlur={() => isValid()}
            />
            break;
        case 'textarea':
            inputElement = <textarea
                name={props.name}
                className='inputElement'
                {...props.elemntConfig}
                value={props.value}
            />
            break;
        default:
            inputElement = <input
                name={props.name}
                className='inputElement'
                {...props.elemntConfig}
                value={props.value} />
    }

    return (
        <div className='Input'>
            <label className='Label'> {props.Label} </label>
            {inputElement}
        </div>
    );
};
export default input;