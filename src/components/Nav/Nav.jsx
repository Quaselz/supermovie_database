import { NavLink } from "react-router-dom";
import './Nav.css'
const Nav = () => {
    return ( 
        <header>
            <nav>
                <div>
                <NavLink to="/">
                    <img src="" alt="Logo" />
                </NavLink>
                </div>
                <div>
                    <NavLink to="/">Home </NavLink>
                    <NavLink to="/movies">Movies </NavLink>
                    <NavLink to="/contact">Contact </NavLink>
                </div>
            </nav>
        </header>
     );
}
 
export default Nav;