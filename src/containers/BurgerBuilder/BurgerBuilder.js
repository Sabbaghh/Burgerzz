import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
//redux
import { connect } from 'react-redux';
import * as builderBurgerActions from '../../store/actions/burgerBuilder'

class BurgerBuilder extends Component {
    state = { purchasable: false, loading: false };

    componentDidMount() { this.props.initIngredients(); };

    editPurchase = (ing) => {
        let ingredientsValueSum = 0;
        Object.values({ ...ing }).map(el => (ingredientsValueSum += el));
        return ingredientsValueSum > 0;
    };

    purchasableHandler = () => this.setState({ purchasable: true });

    purchasableCancel = () => this.setState({ purchasable: false });

    purchasableContinue = () => this.props.history.push({ pathname: 'https://sabbaghh.github.io/Burgerzz/checkout' });

    render() {
        const ingredientValuesButtons = { ...this.props.ingredients };
        for (let i in ingredientValuesButtons) ingredientValuesButtons[i] = ingredientValuesButtons[i] <= 0

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
const mapStateToProps = state => (
    {
        ingredients: state.burgerBuilder.ingredients,
        TotalPrice: state.burgerBuilder.TotalPrice
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        AddIngredient: (IngredientsName) =>
            dispatch(builderBurgerActions.addIngredient(IngredientsName)),

        removeIngredient: (IngredientsName) =>
            dispatch(builderBurgerActions.removeIIngredient(IngredientsName)),

        initIngredients: () => dispatch(builderBurgerActions.initIngredients())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder));