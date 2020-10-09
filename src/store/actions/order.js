import { FETCH_ORDER, PURCHACE_BURGER_START, GET_ORDERS, IS_GETTING_ORDERS } from './actionType';
import axios from '../../Database/axios-orders';

export const fetchOrder = (order, history) => {
    return (dispatch) => {
        dispatch(purchaseBurgerStart());
        axios.post('orders.json', order)
            .then((res) => {
                dispatch(fetchOrderSuccess(res.data.name, order))
                history.push('/')
            })
            .catch(err => console.log(err))
    }
};

export const purchaseBurgerStart = () => {
    return {
        type: PURCHACE_BURGER_START,
    }
};

const fetchOrderSuccess = (id, order) => {
    return {
        type: FETCH_ORDER,
        orders: { id, order }
    }
};

//orders

const getOrdersToComponent = (data) => {
    return {
        type: GET_ORDERS,
        order: data
    }
};

const isGettingOrders = () => {
    return {
        type: IS_GETTING_ORDERS
    }
};


export const getOrdersFormDatabase = () => {
    return dispatch => {
        dispatch(isGettingOrders())
        axios.get('orders.json')
            .then(res => dispatch(getOrdersToComponent(res.data)))
            .catch(err => dispatch(isGettingOrders()))
    }
};



