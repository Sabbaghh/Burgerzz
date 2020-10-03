import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavigationItem.css'

export const NavigationItem = ({ children, link, itemStyle }) => {
    return (
        <li className='NavigationItem'>
            <NavLink
                to={link}
                exact
            >
                {children}
            </NavLink>
        </li>
    );
};


export default NavigationItem;