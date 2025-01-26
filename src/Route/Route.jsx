import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import SingIn from "../Security/SingIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        }
      ]
    },
    {
        path:'/sign-in',
        element:<SingIn></SingIn>
    }
  ]);

export default router