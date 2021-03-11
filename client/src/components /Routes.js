import React from 'react'
import RecipeContainer from '../containers/RecipeContainer'
import {Switch,Route} from 'react-router-dom'
import NewRecipeForm from './NewRecipeForm';

export const Routes = () => ( 	
    <div>
        <Switch>
            <Route exact path={'/recipes'} render={() =><RecipeContainer />} />
            <Route exact path={'/recipes/:recipeId'} render={showProps => <RecipeShow {...showProps}/>} /> 
            <Route exact path={'/new_recipe'} render={()=><NewRecipeForm/>} />
        </Switch>
    </div>
)

export default Routes;