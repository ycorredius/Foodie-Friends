import { Component } from "react";
import {fetchRecipes,fetchRecipe} from '../actions/recipe/recipeActions';
import {connect} from 'react-redux';
import {Recipes} from '../components/recipes/Recipes';

class RecipeContainer extends Component{
    componentDidMount(){
        this.props.fetchRecipes(this.state)
    }
    handleClick = (e) =>{
        this.props.fetchRecipe(e.target.dataset.target);
    }
    render(){
           if(!this.props.recipes){
               return(
                   <div>
                   </div>
               )
           } else{
               return(
                   <div>
                       <Recipes recipes={this.props.recipes.data} handleClick={this.handleClick}/>
                   </div>
               )
           }
    }
}
const mapStateToProps = (state) =>{
  
    return{
        recipes: state.recipeReducer.recipes
    }
}

export default connect(mapStateToProps,{fetchRecipes,fetchRecipe})(RecipeContainer)