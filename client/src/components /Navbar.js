import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    if(!props.logged_in){
        return(
            <div>
                <ul>
                    <Link to="/recipes">
                        <p>Search Recipes</p>
                    </Link>
                    <Link to="/new_recipe">
                        <p>Create New Recipe</p>
                    </Link>
                    <Link>
                        <p>My Saved Recipes</p>
                    </Link>
                    <Link to="/sign_up">
                        Sign Up
                    </Link>
                    <Link to="login">
                        Login
                    </Link>
                </ul>
            </div>
        )
    }else{
        return(
            <div>
                <ul>
                    <Link to="/recipes">
                        <p>Search Recipes</p>
                    </Link>
                    <Link to="/new_recipe">
                        <p>Create New Recipe</p>
                    </Link>
                    <Link>
                        <p>My Saved Recipes</p>
                    </Link>
                    <button onClick={props.handleLogout} >Logout</button>
                </ul>
            </div>
        )
        
    }
    
}

export default NavBar;