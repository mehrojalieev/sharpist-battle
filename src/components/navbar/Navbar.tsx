import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import { Select, Space } from 'antd';

const Navbar = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <nav>
            <div className="nav-wrapper container">
                <Link to="/">
                    <img className="logo-image" src={"https://www.pngarts.com/files/1/Vacancy-PNG-Free-Download.png"} alt="Logo" />
                </Link>
                <ul className="nav-menu"></ul>
                <div className="nav-actions">
                    <a className="number-link" href="tel:+998901234567">
                        <span>+998</span> 90 123 45 67
                    </a>
                    <select className="language-select">
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
