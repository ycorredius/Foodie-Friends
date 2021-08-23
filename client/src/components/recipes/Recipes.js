import React from 'react';
import RecipeCard from './RecipeCard'

export const Recipes = (props) =>{
  return (
    <div class="grid grid-cols-4 gap-3 justify-center">
      {props.recipes.map((recipe) => (
        <div>
          <RecipeCard recipe={recipe} handClick={props.handClick} />
          </div>
      ))}
    </div>
  );
} 