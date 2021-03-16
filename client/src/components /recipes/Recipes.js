import React from 'react';
import RecipeCard from './RecipeCard'

export const Recipes = (props) =>{
    if(!props.recipes){
        return(
            <div>
                <h1> Apparently there are not any recipes</h1>
            </div>
        )
    } else {
        return(
            <div>
                {
                    props.recipes.map(recipe => <RecipeCard recipe={recipe} handClick={props.handClick}/>)
                }
            </div>
        )
    }
}