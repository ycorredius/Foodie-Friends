import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => (
    <div>
        <ul>
            <Link to="/recipes">
                <p>Search Recipes</p>
            </Link>
            <Link>                
                <p>Find Recipe</p>
            </Link>
            <Link to="/new_recipe">
                <p>Create New Recipe</p>
            </Link>
            <Link>
                <p>My Saved Recipes</p>
            </Link>
        </ul>
    </div>
)

export default NavBar;