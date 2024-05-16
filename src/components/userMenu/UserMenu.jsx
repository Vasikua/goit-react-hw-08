import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
export default function UserMenu() {
    const dispatch = useDispatch();
    const handleLogOut = () => {
           dispatch(logOut());
    }
    const user = useSelector(selectUser);
    return (
        <div>
            <p>Welcome,  {user}</p>
            <button type="button"  onClick={handleLogOut}>
                Logout
            </button>
        </div>

    )
}