import React from 'react';
import { Link } from 'react-router-dom';
import index from './stylesheet/index.css';


const FlagCountry = (props) => {
    const arrayOfList = props.countryFlags
    const theListOfCountry = arrayOfList.map((country) => {
        const theCountry = country.country;
        const theFlag = country.flag;
        const theNationality = country.nationality;
        const recipeList = country.recipe;



        return (
            <Link to={`/${theNationality}`}>
                <figure>
                    <img className="flagImages" alt={theCountry} src={theFlag} />
                    <figcaption>{theCountry}</figcaption>
                </figure>
            </Link>
        )
    });


    return (
        <div>
            <h1>Welcome to Dishbook</h1>
            <h4>Where would you like to eat today?</h4>
            <div className="countryImages">
                {theListOfCountry}</div>
        </div>
    );
}

export default FlagCountry;