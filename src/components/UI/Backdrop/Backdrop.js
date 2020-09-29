import React from 'react';
import './BackDrop.css'

const BackDrop = ({ show, exit }) => {
    if (show) {
        return (
            <div className="BackDrop"
                onClick={() => { exit(false) }}>
            </div>
        )
    } else {
        return <div> loading ... </div>
    }

}

export default BackDrop;