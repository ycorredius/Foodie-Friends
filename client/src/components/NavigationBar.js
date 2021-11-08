import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav,Button,Collapse} from 'bootstrap-4-react'

const NavigationBar = (props) => {
    if(!props.logged_in && !props.userId){
        return (
          <React.Fragment>
            <div class="bg-blue-dark">
              <Navbar expand="lg" mb="3">
                <div class="mr-8">
                  <Navbar.Brand>
                    <div class="text-white">My Recipe Cookbook</div>
                  </Navbar.Brand>
                </div>
                <Navbar.Toggler target="#navbarColor1" />
                <div class="ml-8">
                  <Collapse navbar id="navbarColor1">
                    <Navbar.Nav mr="auto">
                      <Link to="/recipes">
                        <Nav.Link><div class="text-white">Recipes</div></Nav.Link>
                      </Link>
                      <Link to="/sign_up">
                       <Nav.Link><div class="text-white">Sign Up</div></Nav.Link>
                      </Link>
                      <Link to="/login">
                        <Nav.Link><div class="text-white">Login</div></Nav.Link>
                      </Link>
                    </Navbar.Nav>
                  </Collapse>
                </div>
              </Navbar>
            </div>
          </React.Fragment>
        );
    }else{
        return (
          <div class="bg-blue-dark">
            <Navbar expand="lg" mb="3">
              <div class="mr-8">
                <Navbar.Brand>
                  <div class="text-white">My Recipe Cookbook</div>
                </Navbar.Brand>
              </div>
              <Navbar.Toggler target="#navbarColor1" />

              <Collapse navbar id="navbarColor1">
                <div class="ml-8">
                  <Navbar.Nav mr="auto">
                    <Link to="/recipes">
                      <Nav.Link>
                        <div class="text-white">Recipes</div>
                      </Nav.Link>
                    </Link>
                    <Link to={`/users/${props.userId}/recipes/new_recipe`}>
                      <Nav.Link>
                        <div class="text-white">Create Recipe</div>
                      </Nav.Link>
                    </Link>
                    <Link to={`/users/${props.userId}/recipes`}>
                      <Nav.Link>
                        <div class="text-white">My Recipes</div>
                      </Nav.Link>
                    </Link>
                  </Navbar.Nav>
                </div>
                <div class="text-white ">
                  <Button onClick={props.handleLogout}>Logout</Button>
                </div>
              </Collapse>
            </Navbar>
          </div>
        );
        
    }
    
}

export default NavigationBar;