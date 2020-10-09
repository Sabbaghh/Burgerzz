import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/input';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as orderActions from '../../../store/actions/order'
import './ContactData.css';

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
                valid: false,
                touched: false
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
                valid: false,
                touched: false
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
                valid: false,
                touched: false
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
                valid: false,
                touched: false
            }
        },
        loading: false,
        valid: false
    }

    formHandler = (e) => {
        e.preventDefault();
        //implent formData to send them
        let formData = {}
        for (let values in this.state.orderForm) {
            formData[values] = this.state.orderForm[values].value;
        }
        //implementing the order that u wanna fetch
        const order = {
            ingredients: this.props.ingredients,
            TotalPrice: this.props.TotalPrice,
            formData
        }
        //axios
        this.props.fetchOrder(order, this.props.history);
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
        //check if its touched
        specificObj['touched'] = true;
        //checking validation and updating valid 
        specificObj.valid = this.checkValidation(value, specificObj['validation']);
        // clone the main orderFrom from state
        let mainObj = { ...this.state.orderForm };
        //update the orderForm clone
        mainObj[name] = specificObj;
        //update the valid Form 
        let valid = true;
        for (let i in mainObj) {
            valid = valid && mainObj[i].valid
        }

        this.setState({ orderForm: mainObj, valid })
    }

    render() {
        const renderInputs = Object.keys(this.state.orderForm).map((key, index) => {
            return <Input
                Label={key} key={index} name={key}
                elemntType={this.state.orderForm[key].elemntType}
                elemntConfig={this.state.orderForm[key].elemntConfig}
                value={this.state.orderForm[key].value}
                callBackFunction={this.inputHandler}
                inValid={!this.state.orderForm[key].valid}
                isTouched={this.state.orderForm[key].touched}
            />
        })

        return (
            <div className='ContactData' >
                <h4> Enter your contact Data</h4>
                <form onSubmit={this.formHandler}>
                    {renderInputs}
                    <Button
                        disabled={!this.state.valid}
                        btnStyle='Success'
                        value='CONFIRM'
                    />
                </form>
            </div >
        );
    };
};
const mapstatetopProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        TotalPrice: state.burgerBuilder.TotalPrice,
        loading: state.order.loading
    }
}
const dispatchToProps = (dispatch) => {
    return {
        fetchOrder: (order, history) => dispatch(orderActions.fetchOrder(order, history))
    }
}

export default connect(mapstatetopProps, dispatchToProps)(withRouter(ContactData));