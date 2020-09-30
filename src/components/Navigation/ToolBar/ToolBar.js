import React from 'react';
import './ToolBar.css'
import Logo from '../../Logo/Logo'
import NavigtionItems from '../NavigationItems/NavigationItems';

const Toolabr = props => {
    return (
        <header className='ToolBar'>
            <div>menue</div>
            <Logo height={'80%'} />
            <nav className='DesktopOnly'>
                <NavigtionItems />
            </nav>

        </header>
    )
}

export default Toolabr;