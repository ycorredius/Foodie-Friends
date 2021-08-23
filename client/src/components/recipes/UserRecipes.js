import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchUserRecipes } from '../../actions/recipe/recipeActions';
import {sessionStatus} from '../../actions/user/userActions'
import {Recipes} from './Recipes';
class UserRecipes extends Component {
    componentDidMount(){
        this.props.fetchUserRecipes(this.props.props.match.params.userId)
        this.props.sessionStatus()
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
    if(state.userReducer.currentUser.id){
        return{
            userId: state.userReducer.currentUser.id,
            userRecipes: state.recipeReducer.userRecipes
        }
    }
}
export default connect(mapStateToProps,{fetchUserRecipes,sessionStatus})(UserRecipes)