import React from 'react';
import './SideDrawerToggle.css';

export const SideDrawerToggle = ({ toggle }) => {
    return (
        <div onClick={toggle} className='DrawerToggle'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default SideDrawerToggle;