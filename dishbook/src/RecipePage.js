import React from 'react';

class RecipePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>

                <img src="imageURL" />

                <h1>Recipe Title</h1>

                <button>like</button>
                <p>{this.state.count}</p>

                <button>dislike</button>
                <p>{this.state.count}</p>

                <ul>
                    <li>{this.state.strMeasure[]}</li>
                </ul>
                <ul>
                    <li>{this.state.strIngredients[]}</li>
                </ul>
                <p>{this.state.strInstructions}</p>
                <p>{this.state.strSource}</p>

            </div>
        )
    }
}