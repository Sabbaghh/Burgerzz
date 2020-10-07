import * as actionTypes from './actions';


const INGREDIENT_PRICE = {
    SALAD: 0.5,
    CHEESE: 0.2,
    MEAT: 1.3,
    BACON: 0.7
}

const initialState = {
    ingredients: {
        SALAD: 0,
        CHEESE: 0,
        BACON: 0,
        MEAT: 0
    },
    TotalPrice: 4
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.IngredientsName]: state.ingredients[action.IngredientsName] + 1
                },
                TotalPrice: state.TotalPrice + INGREDIENT_PRICE[action.IngredientsName],
            }

        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.IngredientsName]: state.ingredients[action.IngredientsName] - 1
                },
                TotalPrice: state.TotalPrice - INGREDIENT_PRICE[action.IngredientsName]
            }

        default:
            return state;
    }


};
export default reducer;