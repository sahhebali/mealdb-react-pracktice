import React from 'react';
import './Mealses.css'

const Mealses = (props) => {
    console.log(props.foods.idMeal)
    const { idMeal, strMeal, strMealThumb, strArea } = props.foods

    return (
        <div className="meal">
            <div>
                <img className="food-img" src={strMealThumb} alt="logo" />
            </div>
            <div className="meal-details">
                <h3>Name : {strMeal}</h3>
                <p>Id : {idMeal} </p>
                <p> STR :{strArea}</p>
                <button onClick={() => props.handelClick(props.foods)} className="btn-reguler">Add To Cart</button>

            </div>





        </div>
    );
};

export default Mealses;