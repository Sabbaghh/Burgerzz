import React from 'react';
import './Order.css';
import { Redirect } from 'react-router-dom'
export const Order = ({ price, ingredients }) => {
    if (!ingredients) {
        return <Redirect to='/orders' />
    }
    const renderIngredients = Object.keys(ingredients).map(ing => {
        return <h4 key={ing}> ({ing} : {ingredients[ing]}) </h4>
    })

    return (
        <div className='Order'>
            <div className='Ingredients'>
                <h3>INGREDIENTS : </h3>
                {ingredients ? renderIngredients : null}
            </div>
            <p>Price : {price} </p>
        </div>
    );
};
export default Order;