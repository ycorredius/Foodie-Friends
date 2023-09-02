import { useState } from 'react';
import RecipeCard from './RecipeCard.jsx'
import axios from 'axios';
import { useEffect } from 'react';

export default function Recipes () {
  const [recipes,setRecipes] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      const result = await axios.get('http://localhost:3001/recipes')
      console.log(result.data.data)
      setRecipes(result.data.data)
   }
    fetchData()
  },[])
  return(
    <div>
      <h1>Recipes</h1>
      <div>
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} key={recipe.id}/>
        })}
      </div>
    </div>
  )
}
