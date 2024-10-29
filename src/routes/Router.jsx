import {
    createBrowserRouter,
  } from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import DashBoardLayout from "../layout/DashBoardLayout";



const router = createBrowserRouter ([
    {
        path:'/',
        element:<DashBoardLayout/>,
        children: [
            {
                path:'/',
                element:<Dashboard/>
            }
        ]
    }
])

export default router;