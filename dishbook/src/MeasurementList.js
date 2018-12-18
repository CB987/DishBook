import React from 'react';

const MeasurementList = (props) => {
    const ingredient = props.food;
    const measurement = props.amount;
    console.log(props);
    console.log(measurement);
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
        </div>
    )
};

export default MeasurementList;