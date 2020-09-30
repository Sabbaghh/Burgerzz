import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    SALAD: 0.5,
    CHEESE: 0.2,
    MEAT: 1.3,
    BACON: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredient: {
            BACON: 1,
            SALAD: 1,
            CHEESE: 1,
            MEAT: 1
        },
        price: 4,
        purchase: false,
        purchasable: false
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

    render() {
        const ingredientValuesButtons = { ...this.state.ingredient };
        for (let i in ingredientValuesButtons) {
            ingredientValuesButtons[i] = ingredientValuesButtons[i] <= 0
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasable}
                    exit={this.purchasableCancel}>
                    <OrderSummary
                        ingredients={this.state.ingredient}
                        exit={this.purchasableCancel}
                        price={this.state.price}
                    />
                </Modal>

                <Burger ingredient={this.state.ingredient} />
                <BuildControls
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    disabledButtons={ingredientValuesButtons}
                    price={this.state.price}
                    ingredientCount={this.state.ingredient}
                    purchase={this.state.purchase}
                    purchasableHandler={this.purchasableHandler}
                />
            </Fragment>
        )
    }
}
export default BurgerBuilder;