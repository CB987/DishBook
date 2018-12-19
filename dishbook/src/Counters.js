import React from 'react';

const Counters = (props) => {
    return (
        <div>
            <button onClick={() => { props._LikeMe() }}>likes:{props.likes}</button>

            <button onClick={() => { props._DislikeMe() }}>dislikes:{props.unlikes}</button>

        </div>

    )
}

export default Counters;