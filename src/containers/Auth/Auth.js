import React, { Component } from 'react';
import Input from '../../components/UI/Input/input';
import Button from '../../components/UI/Button/Button';
import './Auth.css'
import { connect } from 'react-redux';
//actions 
import { auth } from '../../store/actions/AuthActions';

class Auth extends Component {
    state = {
        orderForm: {
            email: {
                elemntType: 'input',
                elemntConfig: {
                    type: 'email',
                    placeholder: 'Mail address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmal: true,
                    minLenght: 5,
                    maxLenght: 20
                },
                valid: false,
                touched: false
            },
            password: {
                elemntType: 'input',
                elemntConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 7,
                    maxLenght: 20
                },
                valid: false,
                touched: false
            }
        }
    }
    checkValidation = (value, rules) => {
        let isValid = true;
        if (rules.required) isValid = value.trim() !== '' && isValid;
        if (rules.minLenght) isValid = value.length >= rules.minLenght && isValid;
        return isValid;
    }

    inputHandler = (e, name) => {
        const updatecontrols = {
            ...this.state.orderForm,
            [name]: {
                ...this.state.orderForm[name],
                value: e.target.value,
                valid: this.checkValidation(e.target.value, this.state.orderForm[name].validation),
                touched: true
            }
        };
        this.setState({ orderForm: updatecontrols });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.onAuth(this.state.orderForm.email.value, this.state.orderForm.password.value)

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
            <div className='auth'>
                <form onSubmit={(e) => this.submitHandler(e)} >
                    {renderInputs}
                    <Button btnStyle='Success' value='LOGIN' />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, PWD) => dispatch(auth(email, PWD))
    }
};

export default connect(null, mapDispatchToProps)(Auth);