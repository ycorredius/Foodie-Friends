import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe } from '../../actions/recipe/recipeActions'
import {sessionStatus} from '../../actions/user/userActions'
import UpdateRecipeForm from './UpdateRecipeForm';

//BUG: Whenever a user logs out and logs back in clicks on show recipe. current user state shows as undefines. 
// it then works when you refersh. 
export class RecipeShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      showEdit:false,
      showUpload:false
      // ingredients: this.props.ingredients,
      // categories: this.props.categories,
      // instructions: this.props.instructions
    }
    this.toggleEdit.bind(this)
  }

  toggleEdit= (e) => {
    e.preventDefault();
    this.setState({
      showEdit: !this.state.showEdit
    })
  }
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
      return (
        <div>
          {this.state.showEdit ? (
            <div>
              <UpdateRecipeForm recipe={this.props.recipe}/>
            </div>
          ) : (
            <div>
              <img
                src={this.props.recipe.data.attributes.image_url}
                alt="food"
              />
              <h1>{this.props.recipe.data.attributes.name}</h1>
              <ul>
                {this.props.recipe.data.attributes.categories.map((item) => {
                  return <p>{item.tag}</p>;
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
            </div>
          )}
          {this.props.recipe.data.attributes.user_id ==
          this.props.currentUserId ? (
            <div>
              <Link
                to={`/recipes/${this.props.recipe.data.attributes.id}/upload_image`}
              >
                <button>Upload Image</button>
              </Link>
              <button
                value={this.props.recipe.data.attributes.id}
                onClick={this.toggleEdit}
              >
                {this.state.showEdit ? <div>Cancel</div> : <div>Edit</div>}
              </button>
            </div>
          ) : (
            <div></div>
          )}
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