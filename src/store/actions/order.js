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
export const purchaseBurgerStart = () => ({ type: PURCHACE_BURGER_START });
const fetchOrderSuccess = (id, order) => ({ type: FETCH_ORDER, orders: { id, order } });

//orders
export const getOrdersFormDatabase = () => {
    return dispatch => {
        dispatch(isGettingOrders())
        axios.get('orders.json')
            .then(res => dispatch(getOrdersToComponent(res.data)))
            .catch(err => dispatch(isGettingOrders()))
    }
};
const getOrdersToComponent = (data) => ({ type: GET_ORDERS, order: data });
const isGettingOrders = () => ({ type: IS_GETTING_ORDERS });




