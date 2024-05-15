import { clsx } from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    const getNavLink = ({ isActive }) => {
        return clsx(css.link, isActive &&css.active)
    }
    return (
        <nav>
            <NavLink className={getNavLink} to="/">
                Home
            </NavLink>
            <NavLink className={getNavLink} to="/contacts">
                Contacts
            </NavLink>
            <NavLink className={getNavLink} to="/registration">
                Registration
            </NavLink>
            <NavLink className={getNavLink} to="/logIn">
                LogIn
            </NavLink>
            
        </nav>
    )
}

//         <nav>
//             <NavLink  className={getNavLink} to='/'>
//                 Home
//             </NavLink>
//             <NavLink   className={getNavLink} to='/movies'>
//                 Movies
//             </NavLink>
//         </nav>
//     )
// }