import React from 'react';
import RecipeCard from './RecipeCard'



export const Recipes = (props) =>{
    if(!props.recipes){
        return(
                <div>
            </div>
        )
    } else {
        return (
          <div class="grid grid-cols-3 gap-3">
            {props.recipes.map((recipe) => (
              <div class="box-content">
                <RecipeCard recipe={recipe} handClick={props.handClick} />
              </div>
            ))}
          </div>
        );
    } 
}