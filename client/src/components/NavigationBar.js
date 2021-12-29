import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <>
      <div>
        <div class="mr-8">
          <div>My Recipe Cookbook</div>
        </div>
        <div class="ml-8">
          <Link to="/recipes">
            <div>Recipes</div>
          </Link>
          {props.userId ? (
            <div>
              <Link to={`/user/${props.userId}/recipes/new_recipe`}>
                <div>Create Recipe</div>
              </Link>
              <Link to={`/user/${props.userId}/recipes`}>
                <div>My Recipes</div>
              </Link>
              <Link>
                <div>Friends</div>
              </Link>
              <Link to={`/user`}>
                <div>Profile</div>
              </Link>
              <div>
                <button onClick={props.handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/sign_up">
                <div>Sign Up</div>
              </Link>
              <Link to="/login">
                <div>Login</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
