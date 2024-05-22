import { clsx } from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux" ;
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
    const getNavLink = ({ isActive }) => {
        return clsx(css.link, isActive && css.active)
    };
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav className={css.navigation}>
            <NavLink className={getNavLink} to="/">
                Home
            </NavLink>
            {isLoggedIn &&(
                <NavLink className={getNavLink} to="/contacts">
                Contacts
                </NavLink>)}
            
        </nav>
    )
}

