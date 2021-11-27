import classes from "./Auth.module.css";

const Auth = props => {
    return (
        <form className={classes["authForm"]}>
            <div className={classes["field-wrap"]}>
                <label className={classes["field-label"]}>Email</label>
                <input type="email" className={classes["field-input"]} />
            </div>
            <div className={classes["field-wrap"]}>
                <label className={classes["field-label"]}>PassWord</label>
                <input type="password" className={classes["field-input"]}/>
            </div>
            <button>Login</button>
        </form>
    )
}

export default Auth;