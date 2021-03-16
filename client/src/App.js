import React from 'react'
import NavBar from "./components /Navbar"
import {connect} from 'react-redux'
import { fetchRecipes } from './actions/recipe/recipeActions';
import {BrowserRouter as Router} from "react-router-dom";
import Banner from './components /Banner';
import Routes from './components /Routes';
import UserContainer from './containers/UserContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <UserContainer/>
        <Banner/>
        <Routes/>
      </Router>
    </div>
  );
}

export default connect(null,fetchRecipes)(App);
