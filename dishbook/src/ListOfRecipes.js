import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YumWorld from './YumWorld';

class ListOfRecipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        const countryName = this.props.match.params.country;
        // console.log(countryName)
        console.log(this.props)

        // const country = this.props;
        // console.log(country)
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`)
            .then(r => r.json())
            .then(recipe => {
                this.setState({
                    recipes: recipe.meals
                });
            })
        // .then(stuff => {
        //       return (
        //         
        //   })
    }


    _createRecipeList = () => {

    }
    render() {
        const countryName = this.props.match.params.country;
        const listOfRecipes = this.state.recipes.map(recipe => {
            return (
                <div>
                    <Link to={`/${countryName}/${recipe.strMeal}`}>
                        {/* {recipe.strMeal} */}
                        <figure>
                            <img className="foodImages" src={recipe.strMealThumb} />
                            <figcaption>{recipe.strMeal}</figcaption>
                        </figure>

                    </Link>
                </div>
            )
        })
        // return listOfRecipes;
        return (
            <div>
                <h1>{this.props.match.params.country} food, great choice!</h1>
                <h4>Select one of these mouthwatering dishes!</h4>
                <h1>{listOfRecipes}</h1>
            </div>
        )
    }

}

export default ListOfRecipes;
