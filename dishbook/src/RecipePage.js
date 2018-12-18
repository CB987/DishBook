import React from 'react';

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

        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52906')
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
                    ]
                })


            })
    }






    render() {
        return (
            <div>
                <img src={this.state.recipeImage} alt={this.state.recipeTitle} />

                <h1>{this.state.recipeTitle}</h1>

                <button>like</button>
                <p>{this.state.count}</p>

                <button>dislike</button>
                <p>{this.state.count}</p>

                <ul>
                    <li>{this.state.measurements}</li>
                </ul>
                <ul>
                    <li>{this.state.ingredients}</li>
                </ul>
                <p>{this.state.instructions}</p>
                <p>{this.state.sourceURL}</p>
            </div>
        )
    }
}

export default RecipePage;