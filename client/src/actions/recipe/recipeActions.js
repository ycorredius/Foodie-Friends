import axios from 'axios';
import {END_POINT} from './endpoint'
import * as types from '../../actions/recipe/recipeActionTypes'

export const loadrecipes = (recipes) =>{
    return{
        type: types.LOADRECIPES,
        recipes: recipes
    }
}

export const showRecipe = (showRecipe) =>{
    return{
        type: types.SHOW_RECIPE,
        showRecipe: showRecipe
    }
}

export const fetchRecipes = () =>{
    return dispatch =>{
        return axios.get(`${END_POINT}/recipes`)
            .then(response => response.data)
            .then(res=> dispatch(loadrecipes(res)))
    }
}

export const fetchRecipe = (recipeData) =>{
    return dispatch =>{
        return axios.get(`${END_POINT}/recipes/${recipeData}`)
            .then(response => response.data)
            .then(res => {
                dispatch(showRecipe(res))})
    }
}