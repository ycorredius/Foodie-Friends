import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav,Button,Collapse} from 'bootstrap-4-react'

const NavigationBar = (props) => {
    if(!props.logged_in){
        return(<React.Fragment>
                <Navbar expand="lg"  dark bg="dark" mb="3">
                <Navbar.Brand href="#">My Recipe Cookbook</Navbar.Brand>
                <Navbar.Toggler target="#navbarColor1" />
                <Collapse navbar id="navbarColor1">
                    <Navbar.Nav mr="auto">
                        <Link to="/recipes">
                            <Nav.Link> Recipes</Nav.Link>
                        </Link>
                        <Link to="/sign_up">
                            <Nav.Link>Sign Up</Nav.Link>
                        </Link>
                        <Link to="/login">
                           <Nav.Link>Login</Nav.Link>
                        </Link>
                    </Navbar.Nav>
                </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
                <Navbar expand="lg"  dark bg="dark" mb="3">
                <Navbar.Brand href="#">My Recipe Cookbook</Navbar.Brand>
                <Navbar.Toggler target="#navbarColor1" />
                <Collapse navbar id="navbarColor1">
                    <Navbar.Nav mr="auto">
                        <Link to="/recipes">
                            <Nav.Link>Recipe</Nav.Link>
                        </Link>
                        <Link to="/new_recipe">
                            <Nav.Link>Create New Recipe</Nav.Link>
                        </Link>
                        <Link>
                            <Nav.Link>My Saved Recipes</Nav.Link>
                        </Link>
                    </Navbar.Nav>
                    <Button onClick={props.handleLogout} >Logout</Button>
                </Collapse>
                
                </Navbar>
            </React.Fragment>
        )
        
    }
    
}

export default NavigationBar;