import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe } from '../../actions/recipe/recipeActions'
import {sessionStatus} from '../../actions/user/userActions'
import UpdateRecipeForm from './UpdateRecipeForm';

//BUG: Whenever a user logs out and logs back in clicks on show recipe. current user state shows as undefines. 
// it then works when you refersh. 
export class RecipeShow extends Component {
  state = {editMode: false}

  handleclick = (e) => {
    this.props.fetchRecipe(e.target.value)
  }
  componentDidMount() {
    this.props.sessionStatus();
    this.props.fetchRecipe(this.props.match.params.recipeId)
  }
  render() {
    if (!this.props.recipe) {
      return (
        <div>
          <h1></h1>
        </div>
      )
    } else {
      if(!this.editMode){
      return (
        <div>
          <img
            src={this.props.recipe.data.attributes.image_url}
            alt="food"
          />
          <h1>{this.props.recipe.data.attributes.name}</h1>
          <ul>
            {
              this.props.recipe.data.attributes.categories.map((item) => {
                return (
                  <p>
                    {item.tag}
                  </p>
                );
              })}
          </ul>
          {this.props.recipe.data.attributes.instructions.map((item) => {
            return (
              <p>
                {item.stepNumber}: {item.content}
              </p>
            );
          })}
          {this.props.recipe.data.attributes.ingredients.map((item) => {
            return (
              <p>
                {item.name}: {item.quantity}
              </p>
            );
          })}

          {this.props.recipe.data.attributes.user_id == this.props.currentUserId?
          <div>
            <Link to={`/recipes/${this.props.recipe.data.attributes.id}/upload_image`}>
              <button>Upload Image</button>
            </Link>
            <Link to={`/recipes/${this.props.recipe.data.attributes.id}/edit`}>
              <button value={this.props.recipe.data.attributes.id} onClick={this.handleclick}>
                Edit
              </button>
            </Link>
          </div>:<div></div>}
         
        </div>
      )} else{
        <UpdateRecipeForm recipe={this.props.recipe}/>
      }
    }
  }
}

const mapStateToProps = (state) => {
    return {
      recipe: state.recipeReducer.recipe,
      currentUserId: state.userReducer.currentUser.id?state.userReducer.currentUser.id:"none"
    }
}
export default connect(mapStateToProps, { fetchRecipe,sessionStatus })(RecipeShow)