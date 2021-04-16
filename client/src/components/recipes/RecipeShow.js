import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe } from '../../actions/recipe/recipeActions'
import {sessionStatus} from '../../actions/user/userActions'

//BUG: Whenever a user logs out and logs back in clicks on show recipe. current user state shows as undefines. 
// it then works when you refersh. 
export class RecipeShow extends Component {

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
            <Link to={`/recipe/${this.props.recipe.data.attributes.id}/upload_image`}>
              <button>Upload Image</button>
            </Link>
            <button>edit</button>
          </div>:<div></div>}
         
        </div>
      );
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