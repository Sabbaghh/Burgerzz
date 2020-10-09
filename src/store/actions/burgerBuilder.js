import * as actionTypes from './actionType';
import axios from '../../Database/axios-orders'

export const addIngredient = (IngredientsName) => {
    return { type: actionTypes.ADD_INGREDIENT, IngredientsName }
}

export const removeIIngredient = (IngredientsName) => {
    return { type: actionTypes.REMOVE_INGREDIENT, IngredientsName }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredient.json')
            .then((res) => {
                dispatch(setIngredients(res.data))
            })
            .catch((err) => { console.log(err) })
    }
}