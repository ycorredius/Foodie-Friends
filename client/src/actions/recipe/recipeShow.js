import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchRecipe} from './recipeActions';

export class RecipeShow extends Component {
    componentDidMount(){
        this.props.fetchRecipe(this.props.match.params.recipeData)
    }

    render() {
        if(!this.props){
            return(
                <div>
                    <h3>something is broken</h3>
                </div>
            )
        } else {
        return (
            <div>
                <h1>Working</h1>
            </div>
        )}
    }
}

const mapStateToProps = (state)=>{
    return {
        recipe: state.recipeReducer
    }
}

export default connect(mapStateToProps,{fetchRecipe})(RecipeShow)