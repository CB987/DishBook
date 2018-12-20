import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import FlagCountry from './FlagCountry';
import ListOfRecipes from './ListOfRecipes';
import RecipePage from './RecipePage';
import Random from './Random';

import Canada from './images/canada-country.png';
import China from './images/china-country.png';
import England from './images/england-country.png';
import France from './images/france-country.png';
import India from './images/india.png';
import Japan from './images/japan.png';
import Mexico from './images/Mexico.png';
import Morocco from './images/morocco.png';
import Spain from './images/spain.png';
import Thailand from './images/thailand.png';
import Vietnam from './images/vietnam.png';
import UnitedStates from './images/UnitedStates.jpg';


class YumWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                {
                    country: 'Canada',
                    flag: Canada,
                    recipe: [],
                    nationality: 'Canadian'
                },
                {
                    country: 'China',
                    flag: China,
                    recipe: [],
                    nationality: 'Chinese'
                },
                {
                    country: 'UnitedKingdom',
                    flag: England,
                    recipe: [],
                    nationality: 'British'
                },
                {
                    country: 'France',
                    flag: France,
                    recipe: [],
                    nationality: 'French'
                },
                {
                    country: 'India',
                    flag: India,
                    recipe: [],
                    nationality: 'Indian'
                },
                {
                    country: 'Japan',
                    flag: Japan,
                    recipe: [],
                    nationality: 'Japanese'
                },
                {
                    country: 'Mexico',
                    flag: Mexico,
                    recipe: [],
                    nationality: 'Mexican'
                },
                {
                    country: 'Morocco',
                    flag: Morocco,
                    recipe: [],
                    nationality: 'Moroccan'
                },
                {
                    country: 'Spain',
                    flag: Spain,
                    recipe: [],
                    nationality: 'Spanish'
                },
                {
                    country: 'Thailand',
                    flag: Thailand,
                    recipe: [],
                    nationality: 'Thai'
                },
                {
                    country: 'Vietnam',
                    flag: Vietnam,
                    recipe: [],
                    nationality: 'Vietnamese'
                },
                {
                    country: 'UnitedStates',
                    flag: UnitedStates,
                    recipe: [],
                    nationality: 'American'
                }
            ]
        }
    }

    // componentDidMount() {
    //     fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    //         .then(results => {
    //             return results.json();
    //         })
    //         .then(data => {
    //             console.log(data)
    //             this.setState({
    //                 id: data.meals[0].idMeal,
    //                 recipeImage: data.meals[0].strMealThumb,
    //                 recipeTitle: data.meals[0].strMeal,
    //                 ingredients: [
    //                     data.meals[0].strIngredient1,
    //                     data.meals[0].strIngredient2,
    //                     data.meals[0].strIngredient3,
    //                     data.meals[0].strIngredient4,
    //                     data.meals[0].strIngredient5,
    //                     data.meals[0].strIngredient6,
    //                     data.meals[0].strIngredient7,
    //                     data.meals[0].strIngredient8,
    //                     data.meals[0].strIngredient9,
    //                     data.meals[0].strIngredient10,
    //                     data.meals[0].strIngredient11,
    //                     data.meals[0].strIngredient12,
    //                     data.meals[0].strIngredient13,
    //                     data.meals[0].strIngredient14,
    //                     data.meals[0].strIngredient15,
    //                     data.meals[0].strIngredient16,
    //                     data.meals[0].strIngredient17,
    //                     data.meals[0].strIngredient18,
    //                     data.meals[0].strIngredient19,
    //                     data.meals[0].strIngredient20,
    //                 ],
    //                 measurements: [
    //                     data.meals[0].strMeasure1,
    //                     data.meals[0].strMeasure2,
    //                     data.meals[0].strMeasure3,
    //                     data.meals[0].strMeasure4,
    //                     data.meals[0].strMeasure5,
    //                     data.meals[0].strMeasure6,
    //                     data.meals[0].strMeasure7,
    //                     data.meals[0].strMeasure8,
    //                     data.meals[0].strMeasure9,
    //                     data.meals[0].strMeasure10,
    //                     data.meals[0].strMeasure11,
    //                     data.meals[0].strMeasure12,
    //                     data.meals[0].strMeasure13,
    //                     data.meals[0].strMeasure14,
    //                     data.meals[0].strMeasure15,
    //                     data.meals[0].strMeasure16,
    //                     data.meals[0].strMeasure17,
    //                     data.meals[0].strMeasure18,
    //                     data.meals[0].strMeasure19,
    //                     data.meals[0].strMeasure20,
    //                 ],
    //                 instructions: data.meals[0].strInstructions,
    //                 sourceURL: data.meals[0].strSource
    //             })
    //         })
    // };

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact render={(props) => {
                        return (
                            <div>
                            <Link to={`/random/dish`}>Random Dish</Link>
                            <FlagCountry
                                countryFlags={this.state.countries}
                                {...props}
                                />
                            </div>)
                    }} />
                    <Route path="/:country" exact render={(props) => {
                        return (
                            <ListOfRecipes
                                nationality={this.state.countries}
                                {...props}
                            />)
                    }} />
                    <Route path="/:country/:dish/:id" exact render={(props) => {
                        return (
                            <RecipePage
                                recipes={this.state.recipe}
                                {...props}
                            />)
                    }} />
                    <Route path="/random/dish" exact render={(props) => {
                        return (
                            <Random
                                recipes={this.state.recipe}
                                nationality={this.state.countries}
                                {...props}    
                            />)
                    }} /> 
                </div>
            </Router>
        );
    }
}

export default YumWorld;