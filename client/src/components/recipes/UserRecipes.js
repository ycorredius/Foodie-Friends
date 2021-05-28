import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchUserRecipes } from '../../actions/recipe/recipeActions'

class UserRecipes extends Component {
    componentDidMount(){
        this.props.fetchUserRecipes(this.props.props.match.params.userId);
    }
    render() {
        if (this.props.userId){
        return (
            <div>
                <h1>This should work</h1>
            </div>
        )}else{
            return(
                <div> 
                    <h1>Does not work</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        userId: state.userReducer.currentUser.id
    }
}
export default connect(mapStateToProps,{fetchUserRecipes})(UserRecipes)