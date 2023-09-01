import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/index.jsx'
import {  RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes}/>
  </React.StrictMode>,
)
