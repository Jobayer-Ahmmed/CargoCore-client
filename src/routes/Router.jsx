import {
    createBrowserRouter,
  } from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import DashBoardLayout from "../layout/DashBoardLayout";
import RateCalculator from "../pages/dashboard/rateCalculator/RateCalculator";
import MapModal from "../modal/MapModal";



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
            },
            {
                path: '/map-modal',
                element: <MapModal/>
            }
        ]
    }
])

export default router;