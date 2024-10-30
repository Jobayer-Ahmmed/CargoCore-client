import {
    createBrowserRouter,
  } from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import DashBoardLayout from "../layout/DashBoardLayout";
import RateCalculator from "../pages/dashboard/rateCalculator/RateCalculator";



const router = createBrowserRouter ([
    {
        path:'/',
        element:<DashBoardLayout/>,
        children: [
            {
                path:'/',
                element:<Dashboard/>
            },
            {
                path: '/rate-calculator',
                element: <RateCalculator/>
            }
        ]
    }
])

export default router;