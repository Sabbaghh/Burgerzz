import React from 'react';
import './Order.css';
export const Order = ({ price, ingredients }) => {

    const renderIngredients = Object.keys(ingredients).map(ing => {
        return <p key={ing}> {ing} : {ingredients[ing]} </p>
    })

    return (
        <div className='Order'>
            <div className='Ingredients'>
                <h3>INGREDIENTS : </h3>
                {renderIngredients}
            </div>
            <p>Price : {price} </p>
        </div>
    );
};
export default Order;