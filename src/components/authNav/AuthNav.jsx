import css from "./AuthNav.module.css"
import { NavLink } from "react-router-dom"



export default function AuthNav() {
    
    return ( <div className={css.wrapper}>
        <NavLink className={css.link} to='registration'>
            Registration
        </NavLink>
        <NavLink className={css.link} to='logIn'>
                Log In
        </NavLink>
    </div>
    )

}