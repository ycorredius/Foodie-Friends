import React from 'react';
import RecipeCard from './RecipeCard'

export const Recipes = (props) =>{
  console.log(props)
    if(!props.recipes){
        return(
            
                <div>
            </div>
        )
    } else {
        return (
          <div>
              {props.recipes.map((recipe) => (
                <RecipeCard recipe={recipe} handClick={props.handClick} />
              ))}
          </div>
        );
    }
}