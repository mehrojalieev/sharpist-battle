import { NavLink } from "react-router-dom"
import "./Sidebar.scss"
import { MdOutlinePersonSearch } from "react-icons/md";
const Sidebar = () => {
  return (
    <aside className="sidebar">
        <ul className="sidebar-menu">
            <li className="menu-item">
                
                <NavLink className={({isActive}) => isActive ? "sidebar-menu__link sidebar-menu__link--active" : "sidebar-menu__link"} to={"/admin/create-vacancy"}><i className="icon"><MdOutlinePersonSearch/></i>Vakansiya yaratish</NavLink>
            </li>
            <li className="menu-item">
                
                <NavLink className={({isActive}) => isActive ? "sidebar-menu__link sidebar-menu__link--active" : "sidebar-menu__link"} to={"/admin/create-vacanc"}><i className="icon"><MdOutlinePersonSearch/></i>Vakansiya yaratish</NavLink>
            </li>
            <li className="menu-item">
                
                <NavLink className={({isActive}) => isActive ? "sidebar-menu__link sidebar-menu__link--active" : "sidebar-menu__link"} to={"/admin/create-vacanc"}><i className="icon"><MdOutlinePersonSearch/></i>Vakansiya yaratish</NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
