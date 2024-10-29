import { Outlet } from "react-router-dom";
import Sidebar from "../shared/sidebar/Sidebar";

export default function RootLayout() {
  return (
    <div>
      {/* here will be navbar */}
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
