import { combineReducers } from "redux";
import {recipeReducer} from './recipe/recipeReducer'

export const rootReducer = combineReducers({
    recipeReducer
})