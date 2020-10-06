import React from 'react';
import './CheckOutSummary.css'
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';


const CheckOutSummary = ({ ingredient, history }) => {
    //check if the ingredient is empty
    Object.size = (obj) => {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    const ButtonContinue = (
        <Button
            value='CONTINUE'
            callBackFunction={() => history.push('/checkout/contact-data')}
            btnStyle='Success' />
    )

    return (
        <div className='CheckoutSummary'>
            <h1> we hope it tasts well</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredient={ingredient} />
            </div>
            <Button
                value='CANCEL'
                callBackFunction={() => history.push('/')}
                btnStyle='Danger' />
            {Object.size(ingredient) !== 0 ? ButtonContinue : null}

        </div>
    );
};

export default CheckOutSummary;