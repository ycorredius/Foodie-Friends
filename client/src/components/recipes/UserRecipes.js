import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import { fetchUserRecipes } from '../../actions/recipe/recipeActions';
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