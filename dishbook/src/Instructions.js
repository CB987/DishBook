import React from 'react';

const Instructions = (props) => {
    const ingredient = props.food;
    const measurement = props.amount;
    const instruction = props.instructions;
    const URL = props.sourceURL;

    const ingredientList = ingredient.map(ingredient => {
        if (ingredient !== "") {
            return (
                <li>{ingredient}</li>
            )
        }
    })

    const amountList = measurement.map(measurement => {
        if (measurement !== '') {
            return (
                <li>{measurement}</li>
            )
        }
    })

    return (
        <div className="ingredients-container">
            <ul>
                {amountList}
            </ul>
            <ul>
                {ingredientList}
            </ul>
            <p>{instruction}</p>
            <p>Original recipe from: {URL}</p>
        </div>
    )
};

export default Instructions;