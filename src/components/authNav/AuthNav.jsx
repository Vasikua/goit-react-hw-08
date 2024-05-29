import css from "./AuthNav.module.css"
import { NavLink } from "react-router-dom"



export default function AuthNav() {
    
    return ( <div className={css.wrapper}>
        <NavLink className={css.link} to='/README.mdregister'>
            Register
        </NavLink>
        <NavLink className={css.link} to='/login'>
            Log In
        </NavLink>
    </div>
    )

}