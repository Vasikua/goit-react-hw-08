import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { toast } from 'react-hot-toast';
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css"
export default function UserMenu() {
    const dispatch = useDispatch();
    const handleLogout = () => {
       
toast.success("By-by");
           dispatch(logout());
    }
    
    const user = useSelector(selectUser);
    return (
        <div className={css.wrapper}>
            <p>Welcome,  {user.name}</p>
            <button className={css.button} type="button"  onClick={handleLogout}>
                Logout
            </button>
        </div>

    )
}