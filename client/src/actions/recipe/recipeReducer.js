import * as types from './recipeActionTypes';

export const recipeReducer = (state = [], action) => {
    switch (action.type){
        case types.LOADRECIPES:
            return{
                ...state,
                recipes: action.recipes,

            }
        case types.SHOW_RECIPE:
            return{
                ...state,
                recipe: action.showRecipe
            }
        case types.USER_RECIPES:
            return{
                ...state,
                userRecipes: action.userRecipes
            }
        default:
            return state
    }
}