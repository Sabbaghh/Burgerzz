import React from 'react';
import BurgerInGredient from './BurgerInGredient/BrugerInGredient';
import './Burger.css';


const Burger = (props) => {

    
    let Slices = Object.keys(props.ingredient).map(el => {
        return [...Array(props.ingredient[el])].map((_, index) => {
            return <BurgerInGredient type={el} key={Math.random()} />
        })
    }).reduce((arr, el) => { return arr.concat(el) }, []);




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