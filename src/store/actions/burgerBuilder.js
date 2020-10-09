import * as actionTypes from './actionType';
import axios from '../../Database/axios-orders'

export const addIngredient = (IngredientsName) => ({ type: actionTypes.ADD_INGREDIENT, IngredientsName });
export const removeIIngredient = (IngredientsName) => ({ type: actionTypes.REMOVE_INGREDIENT, IngredientsName });

//http request
export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredient.json')
            .then((res) => dispatch(setIngredients(res.data)))
            .catch((err) => console.log(err))
    }
}
//initialise ingredients
export const setIngredients = (ingredients) => ({ type: actionTypes.SET_INGREDIENT, ingredients });