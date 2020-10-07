import React, { Component, Fragment } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckOutSummary'
import { withRouter, Route } from 'react-router-dom';
import ConactData from './ContactData/ContactData';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';

export class CheckOut extends Component {

    render() {
        let checkOutSummary = <CheckoutSummary
            history={this.props.history}
            ingredient={this.props.ingredients} />;

        if (!this.props.ingredients) {
            checkOutSummary = <Spinner />;
        }

        return (
            <Fragment>
                {checkOutSummary}
                <Route path={`${this.props.match.path}/contact-data`}>
                    <ConactData />
                </Route>
            </Fragment>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        TotalPrice: state.TotalPrice
    }
}

export default connect(mapStateToProps)(withRouter(CheckOut));