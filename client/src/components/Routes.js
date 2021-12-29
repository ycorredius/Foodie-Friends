import React from "react";
import { Switch, Route } from "react-router-dom";
import NewRecipeForm from "./recipes/recipeForm/NewRecipeForm";
import UploadImage from "./recipes/UploadImage";
import RecipeShow from "./recipes/RecipeShow";
import Signup from "./user/Signup";
import Home from "./Home";
import Login from "./user/Login";
import UpdateRecipeForm from "./recipes/recipeForm/UpdateRecipeForm";
import UserRecipes from "./recipes/UserRecipes";
import RecipeContainer from "../containers/RecipeContainer";
import Profile from "./user/Profile";

export const Routes = () => (
  <div>
    <Switch>
      <Route
        exact
        path={"/recipes"}
        render={(props) => {
          <RecipeContainer props={props} />;
        }}
      />
      <Route
        exact
        path={"/recipe/:recipeId"}
        render={(showProps) => <RecipeShow {...showProps} />}
      />
      <Route
        exact
        path={"/recipe/:recipeId/upload_image"}
        render={(props) => (
          <UploadImage props={props} recipeId={props.match.params.recipeId} />
        )}
      />
      \\TODO: Fix routing between edit and recpie show
      <Route
        exact
        path={"/recipe/:recipeId/edit"}
        render={(props) => <UpdateRecipeForm props={props} />}
      />
      <Route
        exact
        path={"/user"}
        render={(props) => <Profile props={props} />}
      />
      <Route
        exact
        path={"/user/:userId/recipes"}
        render={(props) => (
          <UserRecipes props={props} userId={props.match.params.userId} />
        )}
      />
      <Route
        exact
        path={"/user/:userId/recipes/new_recipe"}
        render={(props) => <NewRecipeForm userId={props.match.params.userId} />}
      />
      <Route exact path={"/user/:userId"} />
      <Route
        exact
        path={"/sign_up"}
        render={(routeProps) => <Signup {...routeProps} />}
      />
      <Route
        exact
        path={"/login"}
        render={(routeProps) => <Login {...routeProps} />}
      />
      <Route path={"/"} render={() => <Home />} />
    </Switch>
  </div>
);

export default Routes;
