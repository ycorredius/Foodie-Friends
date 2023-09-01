import Login from '../components/auth/Login.jsx';
import Signup from '../components/auth/Signup.jsx';
import ErrorPage from '../error-page.jsx';
import Root from './root.jsx'
import {createBrowserRouter} from 'react-router-dom'

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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