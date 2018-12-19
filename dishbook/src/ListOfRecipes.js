import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ListOfRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        const countryName = this.props.match.params.country;
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`)
            .then(r => r.json())
            .then(recipe => {
                this.setState({
                    recipes: recipe.meals
            });
        })
    }

    render() {
        const countryName = this.props.match.params.country;
        const listOfRecipes = this.state.recipes.map(recipe => {
            const id = recipe.idMeal
            return( 
                <div>
                    <Link to = {`/${countryName}/${recipe.strMeal}/${id}`}>
                        <img className="foodImages" src={recipe.strMealThumb} />
                    </Link>
                </div>
            )
        })

        return(
            <div>
               <h1>I am a recipe</h1>
               <h1>{listOfRecipes}</h1>
            </div>
        )
    } 
}

export default ListOfRecipes;
