import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

export const NavigationItems = (props) => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem link='https://sabbaghh.github.io/Burgerzz/' itemStyle>
                BurgerBuilder
            </NavigationItem>
            <NavigationItem link='https://sabbaghh.github.io/Burgerzz/orders' >
                Orders
            </NavigationItem>
            <NavigationItem link='/Auth' >
                Login
            </NavigationItem>
        </ul>
    );
};

export default NavigationItems;