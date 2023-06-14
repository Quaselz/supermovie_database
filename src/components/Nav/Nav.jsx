import { NavLink } from "react-router-dom";
import './Nav.css'
import logo from '../../assets/session.jpg'
const Nav = () => {
    return ( 
        <header>
            <nav>
                <div>
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="logo"/>
                </NavLink>
                </div>
                <div>
                    <div>
                        <NavLink to="/">Home </NavLink>
                        <div></div>
                    </div>
                    <div>
                        <NavLink to="/movies">Movies </NavLink>
                        <div></div>
                    </div>
                    <div>
                        <NavLink to="/contact">Contact </NavLink>
                        <div></div>
                    </div>
                </div>
            </nav>
        </header>
     );
}
 
export default Nav;