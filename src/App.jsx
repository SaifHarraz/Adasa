import './App.css'
import {  RouterProvider,createBrowserRouter } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import About from './Pages/About';
import NoPageError from './Pages/NoPageError';
import ErrorPage from './Pages/Error';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';



function App() {
  const routes=createBrowserRouter([
     {
      path:"/",
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[{
        index:true,
        element:<Home/>
      },{
        path:"/home",
        element:<Home/>
      },
     {
      path:"/blog",
      element:<Blog/>,
     },
      {
      path: "blog/:slug",
      element: <BlogDetails />
     },
     {
      path:"/about",
      element:<About/>
     },
     {
      path:"/privacy",
      element:<Privacy/>
     },{
      path:"/terms",
      element:<Terms/>
     },{
      path:"*",
      element:<NoPageError/>
     }
    ]
     }  
  ])
  return (
    <>
         <RouterProvider router={routes}/>

    </>
  )
}

export default App
