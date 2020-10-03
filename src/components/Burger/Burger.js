import React from 'react';
import BurgerInGredient from './BurgerInGredient/BrugerInGredient';
import './Burger.css';


const Burger = (props) => {

    let Slices = Object.keys(props.ingredient)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_, i) => {
                return <BurgerInGredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);






    if (Slices.length === 0) {
        Slices = <p>please Start Adding Ingredient</p>;
    }

    return (
        <div className='burger'>
            <BurgerInGredient type='BREAD_TOP' />
            {Slices}
            <BurgerInGredient type='BREAD_BOTTOM' />
        </div>
    )
}

export default Burger;