import * as actionTypes from '../actions/actionType'

const initialState = { orders: [], loading: false }

const makeOrderToarray = (order) => {
    let orderArray = []
    Object.keys(order).map(key => {
        orderArray.push({ ...order[key], id: key });
        return null;
    });
    return orderArray;
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDER:
            return { ...state, orders: state.orders.concat(action.orders), loading: false }
        case actionTypes.PURCHACE_BURGER_START:
            return { ...state, loading: true }
        case actionTypes.GET_ORDERS:
            return { ...state, orders: makeOrderToarray(action.order), loading: false }
        case actionTypes.IS_GETTING_ORDERS:
            return { ...state, loading: true }
        default:
            return state;
    }
};

export default orderReducer;