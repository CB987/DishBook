import React from 'react';
// import { Link } from 'react-router-dom';
import index from './stylesheet/index.css';


const FlagCountry = (props) =>{
    // console.log(props.countryFlags[0].country);
    const arrayOfList = props.countryFlags
    const theListOfCountry = arrayOfList.map((country) =>{
        return (country.country);
        });
    // console.log(theListOfCountry);

    // console.log(props.countryFlags.Canada.flag);
    // const listOfCountries = Object.keys(props.countryFlags).map((country) =>{
    //     return <img className = "flagImages" alt = "country" src = {theListList.country.flag} />
    // });
    // console.log(listOfCountries);


    // const listOfFlags = listOfCountries.map((theCountry) =>{
        //     return props.countryFlags.theCountry.flag
        // })
    // console.log(listOfFlags);
        
    return(
            <div className = "countryImages">
                <img className = "flagImages" alt = {listOfCountries} src = {listOfCountries.flag} /> */}
                {/* {listOfCountries}
            </div>
    );

    // const theList = props.countryFlags
    // return(
    //     <div className = "countryImages">
    //         {/* <img className = "flagImages" alt = "Canada" src = {theList.Canada.flag} />
    //         <br/>
    //         <img className = "flagImages" alt = "China" src = {theList.China.flag} />
    //         <br/>
    //         <img className = "flagImages" alt = "United Kingdom" src = {theList.United_Kingdom.flag} />
    //         <br/>
    //         <img className = "flagImages" alt = "France" src = {theList.France.flag} />
    //         <br/>
    //         <img className = "flagImages" alt = "India" src = {theList.India.flag} />
    //         <br/>
    //         <img className = "flagImages" alt = "Japan" src = {theList.Japan.flag} />
    //         <br/>
    //         <img className = "flagImages" alt = "Mexico" src = {theList.Mexico.flag} />
    //         <br/>
    //         <img className = "flagImages" alt = "Morocco" src = {theList.Morocco.flag} />
    //         <br/>
    //         <img className = "flagImages" alt = "Spain" src = {theList.Spain.flag} />
    //         <br/>
    //         <img className = "flagImages" alt = "Thailand" src = {theList.Thailand.flag} />
    //         <br/>
    //         <img className = "flagImages" alt = "Vietnam" src = {theList.Vietnam.flag} /> */}
    //     </div>
    // );
}

export default FlagCountry;