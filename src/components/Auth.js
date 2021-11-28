import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/counter";
import classes from "./Auth.module.css";

const Auth = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const submitHandler = event => {
        event.preventDefault();
        if (email.includes("@") && password) {
            dispatch(authActions.login());
        }
    }
    const emailHandler = event => {
        setEmail(event.target.value);
    }
    const passHandler = event => {
        setPassword(event.target.value);
    }
    return (
        <Fragment>
            {
                !isAuthenticated &&
                <form className={ classes["authForm"] } onSubmit={submitHandler}>
                    <div className={ classes["field-wrap"] }>
                        <label className={ classes["field-label"] }>Email</label>
                        <input type="email" className={ classes["field-input"] }
                        onChange={emailHandler} />
                    </div>
                    <div className={ classes["field-wrap"] }>
                        <label className={ classes["field-label"] }>PassWord</label>
                        <input type="password" className={ classes["field-input"] } onChange={passHandler}/>
                    </div>
                    <button>Login</button>
                </form>
            }
        </Fragment>
    )
}

export default Auth;