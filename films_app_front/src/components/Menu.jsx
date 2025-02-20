import { NavLink } from "react-router-dom";

function Menu() {

    return <div>
        <nav className="menu">
            <NavLink to="/">Movies </NavLink>
            <NavLink to="top-movies">Top 10 </NavLink>
            <NavLink to="/about">About </NavLink>
        </nav>
    </div>
}

export default Menu;