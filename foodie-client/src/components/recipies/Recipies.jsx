// import React from 'react';
import RecipeCard from './RecipeCard'

export const Recipes = (props) =>{
  return (
    <div class="grid grid-cols-4 gap-3 justify-center">
      {props.recipes.map((recipe) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          <RecipeCard key={recipe.id} recipe={recipe} />
        </div>
      ))}
    </div>
  );
} 