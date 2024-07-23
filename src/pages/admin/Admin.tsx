    import { Outlet } from "react-router-dom"
import "./Admin.scss"
import Sidebar from "./sidebar/Sidebar"
const Admin = () => {
  return (
    <section className="admin-dashboard">
        <Sidebar/>
        <main className="dashboard-contents">
            <Outlet/>
        </main>
    </section>
  )
}

export default Admin
