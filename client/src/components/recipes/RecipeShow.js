import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecipe } from "../../actions/recipe/recipeActions";
import { sessionStatus } from "../../actions/user/userActions";

//BUG: Whenever a user logs out and logs back in clicks on show recipe. current user state shows as undefines.
// it then works when you refersh.

//TODO: Refactor to edit to po`int to a route instead of triggering a boolean.
export class RecipeShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      showUpload: false,
    };
    this.toggleEdit.bind(this);
  }

  toggleEdit = (e) => {
    e.preventDefault();
    this.setState({
      showEdit: !this.state.showEdit,
    });
  };

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
    this.props.sessionStatus();
  }

  render() {
    if (!this.props.recipe) {
      return <div></div>;
    } else {
      return (
        <div>
          <img src={this.props.recipe.data.attributes.avatar} alt="food" />
          <div>
            <h1>{this.props.recipe.data.attributes.name}</h1>
          </div>
          <div>
            <div>
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
              <h5>Ingredients</h5>
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
                <div>
                  <Link
                    to={`/recipes/${this.props.recipe.data.attributes.id}/upload_image`}
                  >
                    <button>Upload Image</button>
                  </Link>
                  <Link to={`/recipes/${this.props.recipe.data.attributes.id}`}>
                    <button>Edit Recipe</button>
                  </Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  if (state.userReducer.logged_in && state.userReducer.currentUser) {
    return {
      recipe: state.recipeReducer.recipe,
      currentUserId: state.userReducer.currentUser.id
        ? state.userReducer.currentUser.id
        : "none",
    };
  } else {
    return {
      recipe: state.recipeReducer.recipe,
    };
  }
};
export default connect(mapStateToProps, { fetchRecipe, sessionStatus })(
  RecipeShow
);
