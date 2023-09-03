import { NavLink, Outlet } from "react-router-dom";

export default function RecipeLayout() {
  return(
    <>
    <nav id="main-nav" className="flex justify-between m-4">
      <div></div>
      <div className="flex justify-around">
        <NavLink to="/recipes" className="px-4 my-2">Recipes</NavLink>
        <NavLink to="/recipes/new" className="px-4 my-2" >New Recipe</NavLink>
      </div>
      <div>
        {
          localStorage.getItem("access-token") ? 
            (<NavLink to="/logout">Logout</NavLink>) : 
            (<NavLink to="/login">Login</NavLink>)
        }
      </div>
    </nav>
    <div id="main-content">
      <Outlet/>
    </div>
    </>
  )
}