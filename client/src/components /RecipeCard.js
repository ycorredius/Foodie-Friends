import React from 'react'
import {Link} from 'react-router-dom'

export const RecipeCard = (props) =>{
    const {id} = props.recipe
    const{name,photo_url} = props.recipe.attributes
    return(
        <div>
            {console.log(props)}
            <ul>
                <img src={photo_url} alt="food"/>
                <p> Name: {name}</p>
                <Link to={`/recipes/{${id}`}>
                    <button data-tartget={id} onClick={props.handleClick}> 
                        Show Recipe
                    </button>
                </Link>
            </ul>
        </div>
    )
}

export default RecipeCard