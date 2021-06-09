import React from 'react'
import {connect} from 'react-redux'
import { fetchRecipes } from './actions/recipe/recipeActions';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './components/Routes';
import UserContainer from './containers/UserContainer';

function App() {
  return (
    <div class="App min-h-screen justify-center bg-gray-500 font-serif">
      <Router>
        <UserContainer />
        <Routes />
      </Router>
    </div>
  );
}

export default connect(null,fetchRecipes)(App);
