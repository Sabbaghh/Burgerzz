import React from 'react';
import './NavigationItem.css'

export const NavigationItem = ({ children, link, itemStyle }) => {
    return (
        <li className='NavigationItem'>
            <a href={link}
                className={itemStyle ? 'active' : null}>
                {children}
            </a>
        </li>
    );
};


export default NavigationItem;