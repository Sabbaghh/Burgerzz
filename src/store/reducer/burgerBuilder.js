import * as actionTypes from '../actions/actionType'




const initialState = {
    ingredients: null,
    TotalPrice: 4
}

const INGREDIENT_PRICE = {
    SALAD: 0.5,
    CHEESE: 0.2,
    MEAT: 1.3,
    BACON: 0.7
}

const burgerBuilder = (state = initialState, action) => {
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

        case actionTypes.SET_INGREDIENT:
            return { ...state, ingredients: action.ingredients, TotalPrice: initialState.TotalPrice }

        default:
            return state;
    }


};
export default burgerBuilder;