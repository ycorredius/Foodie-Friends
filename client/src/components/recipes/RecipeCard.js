import React from 'react'
import {Link} from 'react-router-dom'

const RecipeCard = (props) =>{
    
    const {id} = props.recipe
    const{name,image_url} = props.recipe.attributes
    return(
        <div>
            <ul>
                <img src={image_url} alt="food"/>
                <p> Name: {name}</p>
                <Link to={`/recipes/${id}`}>
                    <button data-target={id} onClick={props.handleClick}> 
                        Show Recipe
                    </button>
                </Link>
            </ul>
        </div>
    )
}

export default RecipeCard;