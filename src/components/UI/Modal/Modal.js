import React from 'react';
import './Modal.css'

const Modal = ({ children, show }) => {
    const showing = { transform: "translateY(0)", opacity: 1 }
    const Hiding = { transform: "translateY(-100vh)", opacity: 0 }
    return (
        <div className='Modal' style={show ? showing : Hiding}>
            {children}
        </div>
    )
}

export default Modal;