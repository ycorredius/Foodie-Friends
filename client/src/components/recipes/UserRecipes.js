import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchUserRecipes } from '../../actions/recipe/recipeActions';
import RecipeCard from './RecipeCard';
import {Recipes} from './Recipes';

class UserRecipes extends Component {
    componentDidMount(){
        this.props.fetchUserRecipes(this.props.props.match.params.userId);
    }
    
    render() {
        if (this.props.userId && this.props.userRecipes){
        return (
          <div>
              <Recipes recipes={this.props.userRecipes.data} />;
          </div>
        );}else{
            return(
                <div> 
                
                </div>
            )
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        userId: state.userReducer.currentUser.id,
        userRecipes: state.recipeReducer.userRecipes
    }
}
export default connect(mapStateToProps,{fetchUserRecipes})(UserRecipes)