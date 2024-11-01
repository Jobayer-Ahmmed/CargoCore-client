import {
    createBrowserRouter,
  } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AcManagementContainer from "../pages/AccountManagement/AcManagementContainer";
import CommissionsContainer from "../pages/Commissions/CommissionsContainer";
import LoadManagementContainer from "../pages/LoadManagement/LoadManagementContainer";
// import Reconcile from "../pages/AccountManagement/AcManagementContainer";



const router = createBrowserRouter ([
    {
        path:'/',
        element:<RootLayout/>,
        children: [
            {
                path:'/',
                element:<Dashboard/>
            },
            //accounts management route start  ---
            {
                path:'/accounting',
                element:<AcManagementContainer/>
            },
           // Commission route--
           {
            path:'/commission',
            element:<CommissionsContainer/>
           },
           //Load management ==
           {
            path:'/load-management',
            element:<LoadManagementContainer/>
           }
        ]
    }
])

export default router;