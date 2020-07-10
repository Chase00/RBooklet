import React from 'react'

const Recipe = ({title, calories, image, key}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt={key} />
        </div>
    );
}

export default Recipe;