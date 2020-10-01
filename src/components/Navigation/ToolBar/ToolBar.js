import React from 'react';
import './ToolBar.css'
import Logo from '../../Logo/Logo'
import NavigtionItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';

const Toolabr = ({ show }) => {
    return (
        <header className='ToolBar'>
            <SideDrawerToggle toggle={show} />
            <Logo height={'80%'} />
            <nav className='DesktopOnly'>
                <NavigtionItems />
            </nav>

        </header>
    )
}

export default Toolabr;