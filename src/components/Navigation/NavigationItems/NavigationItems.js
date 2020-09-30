import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

export const NavigationItems = (props) => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem link='/' itemStyle>
                BurgerBuilder
            </NavigationItem>
            <NavigationItem link='/' >
                Checkout
            </NavigationItem>
        </ul>
    );
};

export default NavigationItems;