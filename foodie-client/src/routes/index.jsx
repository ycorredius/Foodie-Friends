import Login from '../components/auth/Login.jsx';
import Signup from '../components/auth/Signup.jsx';
import Recipies from '../components/recipies/Recipes.jsx';
import RecipeForm from '../components/recipies/RecipeForm.jsx';
import RecipeDetail from '../components/recipies/RecipeDetail.jsx';
import ErrorPage from '../error-page.jsx';
import {createBrowserRouter} from 'react-router-dom'
import RecipeLayout from '../components/recipies/RecipeLayout.jsx';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RecipeLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Recipies/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "/recipes",
        element: <Recipies/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "/recipes/new",
        element: <RecipeForm/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetail/>,
        errorElement: <ErrorPage/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <Signup/>,
    errorElement: <ErrorPage />
  }
])

export default Routes;