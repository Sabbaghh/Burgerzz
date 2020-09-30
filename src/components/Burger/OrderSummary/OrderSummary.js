import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button'

const OrderSummary = ({ ingredients, exit, price }) => {

    const ingredientsSammary = Object.keys(ingredients).map((el, index) => {
        return (
            <li key={index}>
                <p>{el} : {ingredients[el]}</p>
            </li>
        )
        // console.log(el);
    })

    return (
        <Fragment>

            <h3>Your Order</h3>
            <p>You've ordered our delecious burger with the following ingredients</p>
            <ul>
                {ingredientsSammary}
            </ul>
            <h3> Total Price : {price.toFixed(2)} </h3>
            <p>Continue to Checkout?</p>
            <div>
                <Button value='CANCEl' callBackFunction={exit} btnStyle='Danger' />
                <Button value='CONTINUE' callBackFunction={exit} btnStyle='Success' />
            </div>

        </Fragment>
    )
}

export default OrderSummary;