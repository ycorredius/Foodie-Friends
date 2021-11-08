import React from 'react'
import { useSelector } from 'react-redux';
import {Recipes} from './Recipes';

const UserRecipes = () => {
    const recipes = useSelector((state)=> state.recipeReducer.recipes.data)
    return (
      <div>
        <Recipes recipes={recipes} />
      </div>
    )
}

export default UserRecipes;