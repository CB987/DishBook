import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <h2>Pick Now</h2>
            
            </div>
        );
    }
}

ReactDOM.render(<App></App>, document.querySelector('#root'));