import React from 'react';
// import { Link } from 'react-router-dom';
import cookbook from './images/cookbook.jpg';
import index from './stylesheet/index.css';


const FlagCountry = () =>{
    return(
        <div className = "countryImages">
            <img className = "flagImages" alt = "Usa" src={cookbook}></img>
            <br/>
            <img alt = "Iceland"></img>
            <br/>
            <img alt = "Greenland"></img>
            <br/>
            <img alt = "Germany"></img>
            <br/>
            <img alt = "Italy"></img>
            <br/>
            <img alt = "China"></img>
            <br/>
            <img alt = "Japan"></img>
            <br/>
            <img alt = "Peru"></img>
            <br/>
            <img alt = "Canada"></img>
            <br/>
            <img alt = "Mexico"></img>
            <br/>
            <img alt = "Greece"></img>
        </div>
    );
}

export default FlagCountry;