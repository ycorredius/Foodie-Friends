import { Component } from "react";
import {fetchRecipes,fetch} from '../actions/recipe/recipeActions'
import {connect} from 'react-redux'

class Recipes extends Component{
    componentDidMount(){
        this.props.fetchRecipes(this.state)
    }
    render(){
        return(
            <div>
                <h1>This should work!</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        recipes: state.recipeReducer.recipes
    }
}

export default connect(Recipes,{fetchRecipes})