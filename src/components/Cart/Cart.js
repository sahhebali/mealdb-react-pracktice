import React from 'react';

const Cart = (props) => {
    const { cart } = props
    return (
        <div>
            <h3>Meal-Name : {props.cart.strMeal} </h3>

        </div>
    );
};

export default Cart;