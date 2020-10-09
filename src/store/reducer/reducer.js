import burgerBuilder from './burgerBuilder';
import orderReducer from './order'
import { combineReducers } from 'redux'

export default combineReducers({ burgerBuilder, order: orderReducer })