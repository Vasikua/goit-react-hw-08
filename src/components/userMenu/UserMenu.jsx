import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
    const dispatch = useDispatch();
    const handleLogout = () => {
           dispatch(logout());
    }
    const user = useSelector(selectUser);
    return (
        <div>
            <p>Welcome,  {user}</p>
            <button type="button"  onClick={handleLogout}>
                Logout
            </button>
        </div>

    )
}