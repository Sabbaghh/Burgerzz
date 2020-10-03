import React, { Component, Fragment } from 'react';
import CheckoutSummary from '../../components/Order/CheckOutSummary'
import { withRouter } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner'

export class CheckOut extends Component {
    state = {
        ingredient: null
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.history.location.search);
        const ingredient = {}
        for (let params of query.entries()) {
            ingredient[params[0]] = +params[1];
        }
        this.setState({ ingredient: ingredient })
    }


    render() {
        let checkOutSummary = <CheckoutSummary history={this.props.history} ingredient={this.state.ingredient} />;
        if (!this.state.ingredient) {
            checkOutSummary = <Spinner />;
            console.log('loading')
        }
        return (
            <Fragment>
                {checkOutSummary}
            </Fragment>
        );
    };
};

export default withRouter(CheckOut);