import React from 'react';

import MeasurementList from './MeasurementList';

class RecipePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            recipeImage: "",
            recipeTitle: "",
            likes: 0,
            unlikes: 0,
            ingredients: [],
            measurements: [],
            instructions: "",
            sourceURL: ""
        };
    }

    componentDidMount() {
        const id = 52956
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data)
                this.setState({
                    key: data.meals[0].idMeal,
                    recipeImage: data.meals[0].strMealThumb,
                    recipeTitle: data.meals[0].strMeal,
                    ingredients: [
                        data.meals[0].strIngredient1,
                        data.meals[0].strIngredient2,
                        data.meals[0].strIngredient3,
                        data.meals[0].strIngredient4,
                        data.meals[0].strIngredient5,
                        data.meals[0].strIngredient6,
                        data.meals[0].strIngredient7,
                        data.meals[0].strIngredient8,
                        data.meals[0].strIngredient9,
                        data.meals[0].strIngredient10,
                        data.meals[0].strIngredient11,
                        data.meals[0].strIngredient12,
                        data.meals[0].strIngredient13,
                        data.meals[0].strIngredient14,
                        data.meals[0].strIngredient15,
                        data.meals[0].strIngredient16,
                        data.meals[0].strIngredient17,
                        data.meals[0].strIngredient18,
                        data.meals[0].strIngredient19,
                        data.meals[0].strIngredient20,
                    ],
                    measurements: [
                        data.meals[0].strMeasure1,
                        data.meals[0].strMeasure2,
                        data.meals[0].strMeasure3,
                        data.meals[0].strMeasure4,
                        data.meals[0].strMeasure5,
                        data.meals[0].strMeasure6,
                        data.meals[0].strMeasure7,
                        data.meals[0].strMeasure8,
                        data.meals[0].strMeasure9,
                        data.meals[0].strMeasure10,
                        data.meals[0].strMeasure11,
                        data.meals[0].strMeasure12,
                        data.meals[0].strMeasure13,
                        data.meals[0].strMeasure14,
                        data.meals[0].strMeasure15,
                        data.meals[0].strMeasure16,
                        data.meals[0].strMeasure17,
                        data.meals[0].strMeasure18,
                        data.meals[0].strMeasure19,
                        data.meals[0].strMeasure20,
                    ],
                    instructions: data.meals[0].strInstructions,
                    sourceURL: data.meals[0].strSource
                })


            })
    }






    render() {
        return (
            <div>
                <img src={this.state.recipeImage} alt={this.state.recipeTitle} />

                <h1>{this.state.recipeTitle}</h1>

                <button>likes</button>
                <p>{this.state.count}</p>

                <button>dislikes</button>
                <p>{this.state.count}</p>

                <MeasurementList
                    const food={this.state.ingredients}
                    const amount={this.state.measurements}
                />

                <p>{this.state.instructions}</p>
                <p>Original recipe from: {this.state.sourceURL}</p>
            </div>
        )
    }

    // _getFilteredResults = () => {
    //     if (this.state.ingredients = )
    // }


}



export default RecipePage;