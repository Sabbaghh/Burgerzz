import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

export const NavigationItems = (props) => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem link='/Burgerzz' itemStyle>
                BurgerBuilder
            </NavigationItem>
            <NavigationItem link='/orders' >
                Orders
            </NavigationItem>
            <NavigationItem link='/Auth' >
                Login
            </NavigationItem>
        </ul>
    );
};

export default NavigationItems;