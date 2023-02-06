import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import {  Header } from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Instamart from "./components/Instamart";
//Lazy loading
const Instamart = lazy(()=> import("./components/Instamart"));


const AppLayout =() =>{
    return(
  <> 
      <Header />
      <Outlet/>
      <Footer/>
  </>
    )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement : <Error/>,
   children:[
    {
      path:"/",
      element: <Body/>
      },
      {
       path:"/about",
      element: <About />,
      children:[{
      path: "profile",
      element : <Profile/>
      }]
      }, 
    {
      path:"/contact",
      element: <Contact />
      },
      {
        path:"/instamart",
        element: <Instamart />
        },
      {
        path:"/restaurant/:id",
        element: <RestrauntMenu/>
      },
  ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);