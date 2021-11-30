import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Mealses from '../Meals/Mealses';
import './Meal.css'


const Meal = () => {
    const [food, setFood] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./Meals.Json')
            .then(res => res.json())
            .then(data => setFood(data.meals))
    }, [])
    const handelClick = (food) => {
        const newFood = [...cart, food]
        setCart(newFood)
    }
    return (
        <div className="meal-container">
            <div className="food-container">
                <h3>food :</h3>
                {
                    food.map(foods => <Mealses foods={foods}
                        handelClick={handelClick}
                    >

                    </Mealses>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>



        </div>
    );
};

export default Meal;