import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { Label: 'Salad', type: 'SALAD' },
    { Label: 'Cheese', type: 'CHEESE' },
    { Label: 'Bacon', type: 'BACON' },
    { Label: 'Meat', type: 'MEAT' }
]

const BuildControls = ({ addIngredient, removeIngredient,
    disabledButtons, price, ingredientCount, purchase, purchasableHandler }) => {

    const renderControl = controls.map(({ type, Label }) => {
        return <BuildControl
            key={Label}
            type={type}
            Label={Label}
            add={() => addIngredient(type)}
            remove={() => removeIngredient(type)}
            disabled={disabledButtons[type]}
            count={ingredientCount[type]} />
    })


    return (
        <div className='buildControls' >
            <h3>  Total Price : {price.toFixed(2)} </h3>
            { renderControl}
            <button className='OrderButton'
                disabled={!purchase}
                onClick={() => purchasableHandler(purchase)}
            > ORDER NOW</button>
        </div >
    )

}


export default BuildControls;