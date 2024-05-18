import css from "./AppBar.module.css";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import AuthNav from "../authNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


export default function AppBar() {
    const isLoggeIn = useSelector(selectIsLoggedIn);
    return (
        <header className={css.container}>
            <Navigation />
            {isLoggeIn ? <UserMenu /> : <AuthNav/>
}        </ header>
    )
}