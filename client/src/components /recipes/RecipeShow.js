import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchRecipe} from '../../actions/recipe/recipeActions'

export class RecipeShow extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.props.fetchRecipe(this.props.match.params.recipeId)
    }

    render() {
        if(!this.props.recipe){
        return (
            <div>
                <h1>Not there yet</h1>
            </div>
        )}else{
            return (
              <div>
                <img
                  src={this.props.recipe.data.attributes.photo_url}
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
              </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return{
        recipe: state.recipeReducer.recipe
    }
}
export default connect(mapStateToProps,{fetchRecipe})(RecipeShow)