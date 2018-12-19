import React from 'react';
import { Link } from 'react-router-dom';
import index from './stylesheet/index.css';


const FlagCountry = (props) =>{
    const arrayOfList = props.countryFlags
    const theListOfCountry = arrayOfList.map((country) =>{
        const theCountry = country.country;
        const theFlag = country.flag;
        const theNationality = country.nationality;
        const recipeList = country.recipe;


    
        return(
            <Link to = {`/${theNationality}`}>
                <div className="images">
                        <img className = "flagImages" alt = {theCountry} src = {theFlag}/>
                </div>
            </Link>         
        )
    });


    return(
            <div className = "countryImages">
                <div className="country-title-container">
                    <h1>YumWorld!!!</h1>
                    <h2>Where would you like to eat?</h2>
                </div>
                <div className="country-image-container">
                    {theListOfCountry}
                </div>
            </div>
    );
}

export default FlagCountry;