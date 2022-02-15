import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
    return <header>
        <img className="header-img" src="./images/logo.png" alt="logo" />
        <nav>
            <NavLink className="header-a" to="/">Home</NavLink>

            <NavLink className="header-a" to="/characters">Characters</NavLink>

            <NavLink className="header-a" to="/locations">Locations</NavLink>
        </nav>
    </header>
}