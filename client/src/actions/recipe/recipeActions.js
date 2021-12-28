import axios from "axios";
import { RECIPE_END_POINT } from "./endpoint";
import * as types from "../../actions/recipe/recipeActionTypes";

export const loadrecipes = (recipes) => {
  return {
    type: types.LOADRECIPES,
    recipes: recipes,
  };
};

export const showRecipe = (showRecipe) => {
  return {
    type: types.SHOW_RECIPE,
    showRecipe: showRecipe,
  };
};

export const userRecipes = (userRecipes) => {
  return {
    type: types.USER_RECIPES,
    userRecipes: userRecipes,
  };
};

export const fetchRecipes = () => {
  return (dispatch) => {
    return axios
      .get(`${RECIPE_END_POINT}`)
      .then((response) => response.data)
      .then((res) => dispatch(loadrecipes(res)));
  };
};

export const fetchRecipe = (recipeData) => {
  return (dispatch) => {
    return axios
      .get(`${RECIPE_END_POINT}/${recipeData}`)
      .then((response) => response.data)
      .then((res) => {
        dispatch(showRecipe(res));
      });
  };
};

export const updateRecipe = (recipeData) => {
  axios.patch(`${RECIPE_END_POINT}/recipes/${recipeData}`);
};

export const fetchUserRecipes = (recipeData) => {
  const id = recipeData;
  return (dispatch) => {
    return axios
      .get(`${RECIPE_END_POINT}/users/${id}/recipes`)
      .then((response) => response.data)
      .then((res) => {
        dispatch(userRecipes(res));
      });
  };
};
