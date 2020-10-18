import React from 'react';
import './Input.css'
export const input = (props) => {
    //check validation
    const inputClass = ['inputElement']
    if (props.inValid && props.isTouched) {
        inputClass.push('invalid')
    }

    //rendering inputs
    let inputElement = null;
    switch (props.elemntType) {
        case 'input':
            inputElement = <input
                name={props.name}
                className={inputClass.join(' ')}
                {...props.elemntConfig}
                value={props.value}
                onChange={(e) => props.callBackFunction(e, props.name)}
            />


            break;
        case 'textarea':
            inputElement = <textarea
                name={props.name}
                className={inputClass}
                {...props.elemntConfig}
                value={props.value()}
            />
            break;
        default:
            inputElement = <input
                name={props.name}
                className={inputClass}
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