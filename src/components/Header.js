import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/counter";
const Header = props => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(authActions.logout());
    }
    return (
        <nav className={classes["navbar"]}>
            <h1 className={classes["navHead"]}>Redux Auth</h1>
            <div className={classes["menubar"]}>
                {
                    isAuthenticated &&
                    <>
                        <div className={classes["menuItems"]}>My Products</div>
                        <div className={classes["menuItems"]}>My Sales</div>
                        <button className={classes["logout"]} onClick={logoutHandler}>Logout</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Header;