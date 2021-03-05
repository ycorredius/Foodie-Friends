import React from 'react'
import NavBar from "./components /Navbar"
import RecipeContainer from "./containers/RecipeContainer";
import {connect} from 'react-redux'
import { fetchRecipes } from './actions/recipe/recipeActions';
import {BrowserRouter as Router} from "react-router-dom";
import Banner from './components /Banner';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Banner/>
        <RecipeContainer/>
      </Router>
    </div>
  );
}

export default connect(null,fetchRecipes)(App);
