import React from 'react';
import './BackDrop.css'

const BackDrop = ({ show, exit }) => {
    if (show) {
        return (
            <div className="BackDrop"
                onClick={() => exit()}>
            </div>
        )
    }
    return null;
}

export default BackDrop;