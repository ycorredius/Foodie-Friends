import React from 'react'
import RecipeContainer from '../containers/RecipeContainer'
import {Switch,Route} from 'react-router-dom'

export const Routes = () => (
    <div>
        <Switch>
            <Route exact path={'/recipes'} render={<RecipeContainer />} />
            <Route exact path={'/recipes/:recipeId'} render={showProps => <RecipeShow {...showProps}/>} />
        </Switch>
    </div>
)

export default Routes;