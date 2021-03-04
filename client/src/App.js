import React from 'react'
import NavBar from "./components /Navbar"
import RecipeContainer from "./containers/RecipeContainer";
import {connect} from 'react-redux'
import { fetchRecipes } from './actions/recipe/recipeActions';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <RecipeContainer/>
      </Router>
    </div>
  );
}

export default connect(null,fetchRecipes)(App);
