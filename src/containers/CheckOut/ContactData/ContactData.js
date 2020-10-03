import React, { Component } from 'react';
import axiosOrders from '../../../Database/axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'

import './ContactData.css';

export class ContactData extends Component {
    state = {
        orders: {
            name: '',
            email: '',
            address: {
                street: '',
                cirty: '',
            }
        },
        loading: false,

    }
    formHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredient,
            price: this.props.price,
            customer: {
                name: 'sabbbagh',
                adress: {
                    street: 'hai ilshahid',
                    country: 'Jordan'
                },
                email: 'holyshot@gmail.com'
            }
        }
        //http request 

        axiosOrders.post('orders.json', order)
            .then(res => {
                this.setState({ loading: false })

            })
            .catch(this.setState({ loading: true }))
    }

    render() {
        let Form = (
            <form onSubmit={(e) => this.formHandler(e)}>
                <input type="text" name='name' placeholder='Your name' />
                <input type="email" name='email' placeholder='Your email' />
                <input type="text" name='city' placeholder='city code' />
                <input type="street" name='street' placeholder='Your street' />
                <Button btnStyle='Success' value='Submit' callBackFunction={() => this.formHandler} />
            </form>
        )
        if (this.state.loading) {
            Form = <Spinner />
        }
        return (
            <div className='ContactData'>
                <h4> Enter your contact Datat</h4>
                {Form}
            </div>
        );
    };
};

export default ContactData;