import { Outlet } from "react-router-dom"
import Sidebar from "../shared/sidebar/Sidebar"

const DashBoardLayout = () => {
  return (
    <div>
      {/* here will be navbar */}
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default DashBoardLayout
