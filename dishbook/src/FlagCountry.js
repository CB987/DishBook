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
                <img className = "flagImages" alt = {theCountry} src = {theFlag}/>
            </Link>         
        )
    });


    return(
            <div className = "countryImages">
                {theListOfCountry}
            </div>
    );
}

export default FlagCountry;