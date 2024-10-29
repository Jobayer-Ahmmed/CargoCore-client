import {
    createBrowserRouter,
  } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Dashboard from "../pages/dashboard/Dashboard";



const router = createBrowserRouter ([
    {
        path:'/',
        element:<RootLayout/>,
        children: [
            {
                path:'/',
                element:<Dashboard/>
            }
        ]
    }
])

export default router;