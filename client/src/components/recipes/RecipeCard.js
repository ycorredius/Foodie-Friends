import React from 'react'
import {Link} from 'react-router-dom'

const RecipeCard = (props) =>{
    
    const {id} = props.recipe
    const{name,image_url} = props.recipe.attributes
    return (
      <div>
        <div class="container w-full max-w-xs">
          <div class="flex flex-col justify-center items-center">
            <div class="bg-gray-500">
              <img
                class="object-conatain rounded h-64"
                src={image_url}
                alt="food"
              />
              <p> Name: {name}</p>
              <Link to={`/recipes/${id}`}>
                <button
                  class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  data-target={id}
                  onClick={props.handleClick}
                >
                  Show Recipe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RecipeCard;