import React from 'react';
import './CheckOutSummary.css'
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';


const CheckOutSummary = ({ ingredient, history }) => {
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
            <Button
                value='CONTINUE'
                callBackFunction={() => history.push('/checkout/contact-data')}
                btnStyle='Success' />

        </div>
    );
};

export default CheckOutSummary;