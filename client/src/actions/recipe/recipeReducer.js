import * as types from './recipeActionTypes';

export default (state = [], action) => {
    switch (action.type){
        case types.LOADRECIPES:
            return{
                ...state,
                recipes: acti
            }
    }
}