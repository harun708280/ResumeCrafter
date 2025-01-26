import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Home from "../Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router