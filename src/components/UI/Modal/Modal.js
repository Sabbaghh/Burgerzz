import React, { Fragment } from 'react';
import './Modal.css'
import BackDrop from '../Backdrop/Backdrop'

const Modal = ({ children, show, purchasableHandler }) => {
    const showing = { transform: "translateY(0)", opacity: 1 }
    const Hiding = { transform: "translateY(-100vh)", opacity: 0 }
    return (
        <Fragment>
            <BackDrop show={show} exit={purchasableHandler} />
            <div className='Modal' style={show ? showing : Hiding}>
                {children}
            </div>
        </Fragment>

    )
}

export default Modal;