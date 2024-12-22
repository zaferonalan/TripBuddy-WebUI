import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home"
import Tours from "./Pages/Tours"
import Gallery from "./Pages/Gallery"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Footer from "./Components/Footer"

const App = () => {

  const Layout = () => {
    return(
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path: "/", element: <Home/>
        },
        {
          path: "/tours", element:<Tours/>
        },
        {
          path: "/about", element: <About/>
        },
        {
          path: "/gallery", element:<Gallery/>
        },
        {
          path: "/contact", element: <Contact/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App