import React from 'react'
import {Link} from 'react-router-dom'

const RecipeCard = (props) =>{
    
    const {id} = props.recipe
    const{name,avatar} = props.recipe.attributes
    return (
      <div>
        <div class="container w-full max-w-xs p-4 mb-4">
          <div class="flex flex-col justify-center items-center">
            <div class="bg-gray-500">
              <img
                class="object-contain rounded h-64 recipe-card-avatar"
                src={avatar}
                alt="food"
              />
              <div className="flex flex-col place-items-center">
                <p className="text-xl"> Name: {name}</p>
                <Link to={`/recipes/${id}`}>
                  <button
                    class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center"
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
      </div>
    );
}

export default RecipeCard;