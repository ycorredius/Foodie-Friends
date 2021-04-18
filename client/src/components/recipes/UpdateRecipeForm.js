import React from 'react'
import {connect} from 'react-redux'
import {fetchRecipe} from '../../actions/recipe/recipeActions'

class UpdateRecipeForm extends React.Component {
    render(){
        if(!this.props.recipe){
            return (
                <div>
                    <h1>This works</h1>
                </div>
            )   
        } else{
            return(
                <div>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" value={this.props.recipe.data.attributes.name}/>
                    </form>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        recipe: state.recipeReducer.recipe
    }
}

export default connect(mapStateToProps,{fetchRecipe})(UpdateRecipeForm)