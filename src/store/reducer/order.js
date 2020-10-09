import * as actionTypes from '../actions/actionType'

const initialState = {
    orders: [],
    loading: false
}

const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_ORDER:
            console.log(state);
            return {
                ...state,
                orders: state.orders.concat(action.orders),
                loading: false
            }
        case actionTypes.PURCHACE_BURGER_START:
            return { ...state, loading: true }
        default:
            return state;
    }
}

export default orderReducer;