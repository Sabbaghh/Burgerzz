import React, { Fragment } from 'react';

const OrderSummary = ({ ingredients, exit }) => {

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
            <p>Continue to Checkout?</p>
            <div>
                <button onClick={() => exit(false)}>CANCEL</button>
                <button>CONTINUE</button>
            </div>

        </Fragment>
    )
}

export default OrderSummary;