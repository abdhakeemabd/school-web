import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home';
import Navbar from './compontent/navbar';
import Gallery from "./pages/gallery";
import './style/boostrap/bootstrap.css';
import About from './pages/about';
import Contact from './pages/contact';
import Course1 from './pages/course1';
import './style/modules/aos.css';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/course1",
      element: <Course1 />,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/blogs",
      element: <Course1 />,
    },
    {
        path: "/gallery",
        element: <Gallery />,
      },
    
    {
      path: "/contact",
      element: <Contact />,
    }
  ]);
  
  function Routers() {
    return (
      <>
              <Navbar></Navbar>  
        <RouterProvider router={router} />
      </>
    );
  }
  export default Routers;

