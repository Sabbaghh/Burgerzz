import React from 'react';
import './BurgerInGredient.css';

const BurgerInGredient = (props) => {

    let ingredient = null;

    switch (props.type) {
        case 'BREAD_BOTTOM':
            ingredient = <div className='BreadBottom'></div>;
            break;
        case 'BREAD_TOP':
            ingredient = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>);
            break;
        case 'MEAT':
            ingredient = <div className='Meat'></div>;
            break;
        case 'CHEESE':
            ingredient = <div className='Cheese'></div>
            break;
        case 'SALAD':
            ingredient = <div className="Salad"></div>;
            break;
        case 'BACON':
            ingredient = <div className="Bacon"></div>
            break;
        default:
            ingredient = null;
    }

    return ingredient;
}

export default BurgerInGredient;
