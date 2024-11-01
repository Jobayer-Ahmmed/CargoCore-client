import { Outlet } from "react-router-dom";
import Nav from "../shared/Navbar/Nav";


export default function RootLayout() {
  return (
    <>

    <nav>
      <Nav/>
    </nav>

      <main className="pl-[279px]" >
      <Outlet/>
      </main>
    </>
  )
}
