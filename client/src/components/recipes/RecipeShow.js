import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { fetchRecipe } from '../../actions/recipe/recipeActions'
import {sessionStatus} from '../../actions/user/userActions'
import UpdateRecipeForm from './UpdateRecipeForm';

//BUG: Whenever a user logs out and logs back in clicks on show recipe. current user state shows as undefines. 
// it then works when you refersh. 

//TODO: Refactor to edit to point to a route instead of triggering a boolean.
export class RecipeShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      showEdit:false,
      showUpload:false
    }
    this.toggleEdit.bind(this)
  }

  toggleEdit= (e) => {
    e.preventDefault();
    this.setState({
      showEdit: !this.state.showEdit
    })
  }
 
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId)
    this.props.sessionStatus()
  }
   
  render() {
    if (!this.props.recipe) {
      return (
        <div>
         
        </div>
      )
    } else {
      return (
        <div>
          {this.state.showEdit ? (
            <div>
              <UpdateRecipeForm
                recipe={this.props.recipe}
                toggleEdit={this.toggleEdit}
              />
            </div>
          ) : (
            <div class="container w-full max-w-xs mt-16">
              <div class="flex flex-cols justify-evenly">
                <div class="grid gap-4">
                  <div class="grid grid-cols-2 items-center gap-4">
                    <img
                      class="rounded object-contain w-full avatar"
                      src={this.props.recipe.data.attributes.avatar}
                      alt="food"
                    />
                    <div class="flex items-center justify-center">
                      <h1>{this.props.recipe.data.attributes.name}</h1>
                    </div>
                  </div>
                  <div class="flex flex-cols items-center justify-center mt-20">
                    <div class=" items-center justify-center font-mono">
                      <h5>Categories</h5>
                      <ul>
                        {this.props.recipe.data.attributes.categories.map(
                          (item, index) => {
                            const fieldName = `categories[${index}]`;
                            return <li key={fieldName}>{item.tag}</li>;
                          }
                        )}
                      </ul>
                      <h5>Instructions</h5>
                      {this.props.recipe.data.attributes.instructions.map(
                        (item, index) => {
                          const fieldName = `instructions[${index}]`;
                          return (
                            <p key={fieldName}>
                              Step {index + 1} : {item.content}
                            </p>
                          );
                        }
                      )}
                      <h5 class="font-mono">Ingredients</h5>
                      {this.props.recipe.data.attributes.ingredients.map(
                        (item, index) => {
                          const fieldName = `ingredients[${index}]`;
                          return (
                            <p key={fieldName}>
                              {item.name}: {item.quantity}
                            </p>
                          );
                        }
                      )}
                      {this.props.recipe.data.attributes.user_id ===
                      this.props.currentUserId ? (
                        <div class="flex items-center justify-center gap-2 mb-10">
                          <Link
                            to={`/recipes/${this.props.recipe.data.attributes.id}/upload_image`}
                          >
                            <button class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                              Upload Image
                            </button>
                          </Link>
                          <button
                            class="bg-blue-dark hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            value={this.props.recipe.data.attributes.id}
                            onClick={this.toggleEdit}
                          >
                            {this.state.showEdit ? (
                              <div>Cancel</div>
                            ) : (
                              <div>Edit</div>
                            )}
                          </button>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  if (state.userReducer.logged_in && state.userReducer.currentUser){
    return {
      recipe: state.recipeReducer.recipe,
      currentUserId: state.userReducer.currentUser.id?state.userReducer.currentUser.id:"none"
    }
  } else{
      return{
        recipe:state.recipeReducer.recipe
      }
  }
}
export default connect(mapStateToProps, { fetchRecipe,sessionStatus })(RecipeShow)