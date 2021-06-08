import React from 'react'
import {Link} from 'react-router-dom'

const RecipeCard = (props) =>{
    
    const {id} = props.recipe
    const{name,image_url} = props.recipe.attributes
    return (
      <div>
        <div class="flex border-2 border-gray-600 border-opacity-20 w-full">
          <div class="floats-right">
            <img class= "float-left object-conatain" src={image_url} alt="food" />
          </div>
          <p> Name: {name}</p>
          <Link to={`/recipes/${id}`}>
            <button data-target={id} onClick={props.handleClick}>
              Show Recipe
            </button>
          </Link>
        </div>
      </div>
    );
}

export default RecipeCard;