import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrders from '../../Database/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';


const INGREDIENT_PRICE = {
    SALAD: 0.5,
    CHEESE: 0.2,
    MEAT: 1.3,
    BACON: 0.7
}

class BurgerBuilder extends Component {

    state = {
        purchase: false,
        purchasable: false,
        loading: false,
    }

    // componentDidMount() {
    //     axiosOrders.get('/ingredient.json')
    //         .then(res => { this.setState({ ingredient: res.data }); })
    //         .catch(err => console.log(err))
    // }


    componentDidMount() {
        const ingredients = this.props.ingredients;
        let ingredientsValueSum = 0;
        for (let i in ingredients) {
            ingredientsValueSum = ingredientsValueSum + ingredients[i]
            console.log(ingredients[i])
        }


        this.setState({ purchase: this.props.TotalPrice > 4 });
    }

    editPurchase = (ing) => {
        let ingredientsValueSum = 0;
        Object.values({ ...ing }).map(el => {
            return ingredientsValueSum += el;
        });
        return ingredientsValueSum > 0;
    }

    purchasableHandler = () => {
        this.setState({ purchasable: true })
    }

    purchasableCancel = () => {
        this.setState({ purchasable: false })
    }

    purchasableContinue = () => {
        this.setState({ loading: true })
        let params = [];
        for (let i in this.props.ingredient) {
            params.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredient[i])}`)
        }
        const queryString = params.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString}`


        });

    }

    render() {
        const ingredientValuesButtons = { ...this.props.ingredients };
        for (let i in ingredientValuesButtons) {
            ingredientValuesButtons[i] = ingredientValuesButtons[i] <= 0
        }

        let OrderSummarys = null;
        let burger = <Spinner />
        if (this.props.ingredients) {
            burger = (
                <Fragment>
                    <Burger ingredient={this.props.ingredients} />
                    <BuildControls
                        addIngredient={this.props.AddIngredient}
                        removeIngredient={this.props.removeIngredient}
                        disabledButtons={ingredientValuesButtons}
                        price={this.props.TotalPrice}
                        ingredientCount={this.props.ingredients}
                        purchase={this.editPurchase(this.props.ingredients)}
                        purchasableHandler={this.purchasableHandler} />
                </Fragment>
            );

            OrderSummarys = (
                <OrderSummary
                    ingredients={this.props.ingredients}
                    exit={this.purchasableCancel}
                    price={this.props.TotalPrice}
                    continues={this.purchasableContinue}
                />
            );
        }
        if (this.state.loading) { OrderSummarys = <Spinner />; }
        return (
            <Fragment>
                <Modal show={this.state.purchasable}
                    exit={this.purchasableCancel}>
                    {OrderSummarys}
                </Modal>
                {burger}
            </Fragment>
        )
    }
}
//redux axtions

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        TotalPrice: state.TotalPrice
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddIngredient: (IngredientsName) =>
            dispatch({ type: actionTypes.ADD_INGREDIENT, IngredientsName: IngredientsName }),

        removeIngredient: (IngredientsName) =>
            dispatch({ type: actionTypes.REMOVE_INGREDIENT, IngredientsName: IngredientsName })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder));