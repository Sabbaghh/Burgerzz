import React from 'react';
import './BuildControl.css';

const BuildControl = ({ Label, type, add, remove, disabled, count }) => {
    return (
        <div className='BuildControl'>
            <button
                disabled={disabled}
                className='Less'
                onClick={remove}>
                Less
            </button>
            <div className='Label'>
                {Label} : {count}
            </div>
            <button
                className='More'
                onClick={add}>
                More
            </button>
        </div>
    )
}

export default BuildControl;