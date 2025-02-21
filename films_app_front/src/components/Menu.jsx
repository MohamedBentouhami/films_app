import { NavLink } from "react-router-dom";

function Menu() {

    return <div>
        <nav className="menu">
            <NavLink to="/">Movies<i className="fa-solid fa-film"></i> </NavLink>
            <NavLink to="top-movies">Top 10<i className="fa-solid fa-medal"></i></NavLink>
            <NavLink to="/about">About<i className="fa-solid fa-inbox"></i></NavLink>
        </nav>
    </div>
}

export default Menu;