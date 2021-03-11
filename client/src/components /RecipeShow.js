import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchRecipe} from '../actions/recipe/recipeActions'

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
            return(
                <div>
                    <h1>This should work</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{
        recipe: state.recipeReducer.recipe
    }
}
export default connect(mapStateToProps,{fetchRecipe})(RecipeShow)