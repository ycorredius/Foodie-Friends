import Login from '../components/auth/Login.jsx';
import Signup from '../components/auth/Signup.jsx';
import Recipies from '../components/recipies/Recipes.jsx';
import ErrorPage from '../error-page.jsx';
import {createBrowserRouter} from 'react-router-dom'

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Recipies/>,
    errorElement: <ErrorPage/>
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