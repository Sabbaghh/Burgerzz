import React, { Component, Fragment } from 'react';
//components
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner';
//redux
import { connect } from 'react-redux'
import { getOrdersFormDatabase } from '../../store/actions/order'

export class Orders extends Component {
    componentDidMount() {
        this.props.getOrders()
    }

    render() {
        let renderOrders = <Spinner />
        if (!this.props.loading) {
            renderOrders = (
                this.props.orders.map(key => {
                    return <Order
                        key={key.id}
                        ingredients={key.ingredients}
                        price={key.TotalPrice}
                    />
                })
            )
        }
        return (
            <Fragment>
                {renderOrders}
            </Fragment>
        );
    };
};

//redux connections
const mapStateToProps = (state) => {
    return {
        loading: state.order.loading,
        orders: state.order.orders
    }
}

const dispatchToProps = (dispatch) => {
    return { getOrders: () => dispatch(getOrdersFormDatabase()) }
}

export default connect(mapStateToProps, dispatchToProps)(Orders);