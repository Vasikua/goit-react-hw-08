import css from "./AuthNav.module.css"
import { NavLink } from "react-router-dom"
export default function AuthNav() {
    
    return ( <div className={css.wrapper}>
        <NavLink className={css.link}>
            Registration
        </NavLink>
        <NavLink className={css.link}>
                Log In
        </NavLink>
    </div>
    )

}