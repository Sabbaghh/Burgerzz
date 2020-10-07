import React, { Component } from 'react';
import axiosOrders from '../../Database/axios-orders';
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner';
import './Orders.css'

export class Orders extends Component {
    state = {
        orders: [],
        loading: false
    }
    componentDidMount() {
        this.setState({ loading: true })
        axiosOrders.get('/orders.json')
            .then(res => {
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({ orders: fetchOrders, loading: false });
            })
            .catch(err => console.log(err))
    }

    render() {
        const renderOrders = (
            this.state.orders.map(key => {
                return <Order
                    key={key.id}
                    ingredients={key.ingredients}
                    price={key.TotalPrice}
                />
            })
        )

        return (
            <div>
                {this.state.loading ? <Spinner /> : renderOrders}
            </div>
        );
    };
};

export default Orders;