import React, { Component, Fragment } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckOutSummary'
import { withRouter, Route } from 'react-router-dom';
import ConactData from './ContactData/ContactData';
import Spinner from '../../components/UI/Spinner/Spinner'

export class CheckOut extends Component {
    state = {
        ingredient: null,
        price: 0
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.history.location.search);
        const ingredient = {}
        let price = 0
        for (let params of query.entries()) {
            if (query[0] === 'price') {
                price = query[1];
            } else {
                ingredient[params[0]] = +params[1];
            }

        }
        this.setState({ ingredient: ingredient, price: price })
    }


    render() {
        let checkOutSummary = <CheckoutSummary history={this.props.history} ingredient={this.state.ingredient} />;
        if (!this.state.ingredient) {
            checkOutSummary = <Spinner />;
        }
        return (
            <Fragment>
                {checkOutSummary}
                <Route path={`${this.props.match.path}/contact-data`}>
                    <ConactData
                        ingredient={this.state.ingredient}
                        price={this.state.price} />
                </Route>
            </Fragment>
        );
    };
};

export default withRouter(CheckOut);