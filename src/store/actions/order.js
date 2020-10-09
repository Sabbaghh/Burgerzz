import { FETCH_ORDER, PURCHACE_BURGER_START } from './actionType';
import axios from '../../Database/axios-orders';

export const fetchOrder = (order, history) => {
    return (dispatch) => {
        dispatch(purchaseBurgerStart());
        axios.post('orders.json', order)
            .then((res) => {
                dispatch(fetchOrderSuccess(res.data, order))
                history.push('/orders')
            })
            .catch(err => console.log(err))
    }
}

export const fetchOrderSuccess = (id, order) => {
    return {
        type: FETCH_ORDER,
        orders: { id, order }
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: PURCHACE_BURGER_START,
    }
}