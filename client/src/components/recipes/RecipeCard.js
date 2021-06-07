import React from 'react'
import {Link} from 'react-router-dom'

const RecipeCard = (props) =>{
    
    const {id} = props.recipe
    const{name,image_url} = props.recipe.attributes
    return (
      <div class="grid px-2 border-2 border-gray-400 border-opacity-20">
        <div class="floats-right">
          <img src={image_url} alt="food" />
        </div>
        <p> Name: {name}</p>
        <Link to={`/recipes/${id}`}>
          <button data-target={id} onClick={props.handleClick}>
            Show Recipe
          </button>
        </Link>
      </div>
    );
}

export default RecipeCard;