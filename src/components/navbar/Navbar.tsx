import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaFacebookF, FaInstagram,  FaTelegramPlane ,FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {
        const [activeResponsiveMenu, setActiveResponsiveMenu] = useState("responsive__menu-wrapper");

        const {pathname} = useLocation()
    return pathname.includes("/admin") ? null : (
        <nav>
            <div className="nav-wrapper container">
                <button onClick={() => setActiveResponsiveMenu("responsive__menu-wrapper active__responsive-menu__wrapper")} className="menu-btn"><AiOutlineMenuUnfold/></button>
            {/* RESPONSIVE MENU CONTENT */}
                <div className={activeResponsiveMenu}>
                    <button onClick={() => setActiveResponsiveMenu("responsive__menu-wrapper")} className="close-btn"><IoMdClose/></button>
                <ul className="responsive-menu">
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/service"}>Xizmatlar</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/portfolio"}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/"}>Karyera</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/about"}>Haqimizda</NavLink>
                    </li>
                </ul>

                <div className="social-actions">
                    <i><FaFacebookF/></i>
                    <i><FaInstagram/></i>
                    <i><FaTelegramPlane/></i>
                    <i><FaXTwitter/></i>
                    <i><FaLinkedinIn/></i>
                </div>
                <a className="number-link" href="tel:+998901234567">+998 90 123 45 67</a>
                </div>

                {/* ---------------------- */}

                <Link to="/">
                    <img className="logo-image" src={"https://www.pngarts.com/files/1/Vacancy-PNG-Free-Download.png"} alt="Logo" />
                </Link>
                <ul className="nav-menu">
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/service"}>Xizmatlar</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/portfolio"}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/"}>Karyera</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "nav-link nav-link--active" : "nav-link"} to={"/about"}>Haqimizda</NavLink>
                    </li>
                </ul>
                <div className="nav-actions">
                    <a className="number-link" href="tel:+998901234567">
                        <span>+998</span> 90 123 45 67
                    </a>
                    {/* <select className="language-select">
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select> */}
                    <Link to={"/admin"} className="login-link">Kirish</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
