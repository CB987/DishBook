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
        <div className="full-recipe-text">
            <h3>Ingredients</h3>
            <div className="ingredients-container">
                <ul className="ingredients-list">
                    {amountList}
                </ul>
                <ul className="ingredients-list">
                    {ingredientList}
                </ul>
            </div>
            <br></br>
            <h3>Instructions</h3>
            <p className="instructions">{instruction}</p>
            <br></br>
            <p className="website-link">Original recipe from: <a href={URL} target="blank">{URL}</a></p>
        </div >
    )
};

export default Instructions;