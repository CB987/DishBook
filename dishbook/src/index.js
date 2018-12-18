import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YumWorld from './YumWorld';
import RecipePage from './RecipePage';


class App extends Component {

    render() {
        return (
            <div>
                <YumWorld />
                {/* <RecipePage /> */}
            </div>
        );
    }
}

ReactDOM.render(<App></App>, document.querySelector('#root'));