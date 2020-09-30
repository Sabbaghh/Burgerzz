import React, { Fragment } from 'react';
import './SliderDrawer.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';

export const SideDrawer = ({ closed, show }) => {
    let SideDrawerStyle = show ? 'Open' : 'Close';
    return (
        <Fragment>
            <BackDrop
                show={show}
                exit={closed} />

            <div className={`SideDrawer ${SideDrawerStyle}`}>
                <Logo height={'11%'} />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>

    );
};

export default SideDrawer;