import React, { Component } from 'react';
import axiosOrders from '../../../Database/axios-orders';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/input';
import './ContactData.css'

export class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elemntType: 'input',
                elemntConfig: {
                    type: 'text',
                    placeholder: 'name'
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 5,
                    maxLenght: 20
                },
                valid: false
            },
            street: {
                elemntType: 'input',
                elemntConfig: {
                    type: 'text',
                    placeholder: 'street'
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 5,
                    maxLenght: 20
                },
                valid: false
            },
            country: {
                elemntType: 'input',
                elemntConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 5,
                    maxLenght: 20
                },
                valid: false
            },
            email: {
                elemntType: 'input',
                elemntConfig: {
                    type: 'email',
                    placeholder: 'email'
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 5,
                    maxLenght: 20
                },
                valid: false
            }
        },
        loading: false,
    }

    formHandler = (e) => {
        e.preventDefault();
        //implent formData to send them
        let formData = {}
        for (let values in this.state.orderForm) {
            formData[values] = this.state.orderForm[values].value;
        }
        //start the loading till data fetch
        this.setState({ loading: true })
        //implementing the order that u wanna fetch
        const order = {
            ingredients: this.props.ingredient,
            price: this.props.price,
            formData
        }
        //http request to fetch data using axios
        axiosOrders.post('orders.json', order)
            .then(res => { this.setState({ loading: false }) })
            .catch(this.setState({ loading: true }))
    }

    checkValidation = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLenght) {
            isValid = value.length >= rules.minLenght && isValid;
        }
        return isValid;
    }

    inputHandler = (e, name) => {
        //store the value
        let value = e.target.value;
        //clone objects inside the orderFrom state
        let specificObj = { ...this.state.orderForm[name] };
        //updating the cloned objects with the new value
        specificObj['value'] = value;
        //checking validation and updating valid 
        specificObj.valid = this.checkValidation(value, specificObj['validation']);
        // clone the main orderFrom from state
        let mainObj = { ...this.state.orderForm };
        //update the orderForm clone
        mainObj[name] = specificObj;
        this.setState({ orderForm: mainObj })
    }

    render() {
        const renderInputs = Object.keys(this.state.orderForm).map((key, index) => {
            return <Input
                Label={key} key={index} name={key}
                elemntType={this.state.orderForm[key].elemntType}
                elemntConfig={this.state.orderForm[key].elemntConfig}
                value={this.state.orderForm[key].value}
                callBackFunction={this.inputHandler}
                validation={this.state.orderForm[key].valid}
            />
        })

        return (
            <div className='ContactData'>
                <h4> Enter your contact Data</h4>
                <form onSubmit={this.formHandler}>
                    {renderInputs}

                    <Button
                        btnStyle='Success'
                        value='CONFIRM' />
                </form>


            </div>
        );
    };
};

export default ContactData;