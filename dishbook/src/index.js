import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import FlagCountry from './FlagCountry';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    };
    render() {
        return (
            <Router>
                <div>
                    <h1>Welcome</h1>
                    <h2>Pick Now</h2>
                    <Route path = "/country" render = {(props) =>{
                        return(<FlagCountry />)
                    }} />

                   
                
                </div>

            </Router>
        );
    }
}

ReactDOM.render(<App></App>, document.querySelector('#root'));