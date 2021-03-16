import { combineReducers } from "redux";
import {recipeReducer} from './recipe/recipeReducer'
import {userReducer} from './user/userReducer'

export const rootReducer = combineReducers({
    recipeReducer,
    userReducer
})