import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrders from '../../Database/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';

const INGREDIENT_PRICE = {
    SALAD: 0.5,
    CHEESE: 0.2,
    MEAT: 1.3,
    BACON: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredient: null,
        price: 4,
        purchase: true,
        purchasable: false,
        loading: false
    }

    componentDidMount() {
        axiosOrders.get('/ingredient.json')
            .then(res => { this.setState({ ingredient: res.data }); })
            .catch(err => console.log(err))
    }

    addIngredient = (type) => {
        const newIngredient = this.state.ingredient;
        const ingredientTypeCount = newIngredient[type] + 1;
        newIngredient[type] = ingredientTypeCount;
        //prices
        let price = this.state.price + INGREDIENT_PRICE[type];
        this.setState({ ingredient: newIngredient, price });
        this.editPurchase();
    }

    removeIngredient = (type) => {
        if (this.state.ingredient[type] === 0) {
            return;
        }
        const newIngredient = this.state.ingredient;
        const ingredientTypeCount = this.state.ingredient[type] - 1;
        newIngredient[type] = ingredientTypeCount;
        //prices
        const price = this.state.price - INGREDIENT_PRICE[type];
        this.setState({ ingredient: newIngredient, price });

        this.editPurchase();
    }

    editPurchase = () => {
        const ingredients = Object.values({ ...this.state.ingredient });
        let ingredientsValueSum = 0;
        ingredients.map(el => {
            return ingredientsValueSum += el;
        });
        this.setState({ purchase: ingredientsValueSum > 0 });
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
        for (let i in this.state.ingredient) {
            params.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredient[i])}`)
        }
        const queryString = params.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString}`
        });

    }

    render() {
        const ingredientValuesButtons = { ...this.state.ingredient };
        for (let i in ingredientValuesButtons) {
            ingredientValuesButtons[i] = ingredientValuesButtons[i] <= 0
        }


        let OrderSummarys = null;
        let burger = <Spinner />
        if (this.state.ingredient) {
            burger = (
                <Fragment>
                    <Burger ingredient={this.state.ingredient} />
                    <BuildControls
                        addIngredient={this.addIngredient}
                        removeIngredient={this.removeIngredient}
                        disabledButtons={ingredientValuesButtons}
                        price={this.state.price}
                        ingredientCount={this.state.ingredient}
                        purchase={this.state.purchase}
                        purchasableHandler={this.purchasableHandler} />
                </Fragment>
            );

            OrderSummarys = (
                <OrderSummary
                    ingredients={this.state.ingredient}
                    exit={this.purchasableCancel}
                    price={this.state.price}
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
export default withRouter(BurgerBuilder);