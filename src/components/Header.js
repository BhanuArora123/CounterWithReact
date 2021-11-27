import classes from "./Header.module.css";
import { useSelector } from "react-redux";
const Header = props => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return (
        <nav className={classes["navbar"]}>
            <h1 className={classes["navHead"]}>Redux Auth</h1>
            <div className={classes["menubar"]}>
                {
                    isAuthenticated &&
                    <>
                        <div className={classes["menuItems"]}>My Products</div>
                        <div className={classes["menuItems"]}>My Sales</div>
                        <button className={classes["logout"]}>Logout</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Header;