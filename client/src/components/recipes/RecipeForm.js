import React from 'react';
import { useForm } from "react-hook-form";



function RecipeForm(props) {
    const { register, handleSubmit } =  useForm();

    const [ingredients, setIngredients] = React.useState([]);
    const [categories,setCategories] = React.useState([]);
    const [instructions, setInstuctions] = React.useState([])

    const handleThisSubmit = (e) =>{

    }
    return (
        <div>
            <form onSubmit={this.handleThisSubmit}>
                <label>Ingredients</label>
                <textarea 
                    id="ingredients" 
                    name="ingredients"
                    ref={register}>
                    {/* {props.recipe.ingredients} */}
                </textarea>
            </form>
        </div>
    )
}


export default RecipeForm;

