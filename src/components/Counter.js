import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import { Fragment } from "react";

const Counter = props => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const isAllowed = useSelector(state => state.counter.isAllowed);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const increase = () => {
        dispatch(counterActions.increment());
    }
    const decrease = () => {
        dispatch(counterActions.decrement());
    }
    const increaseByValue = () => {
        dispatch(counterActions.increase(5));
    }
    const toggleHandler = () => {
        dispatch(counterActions.toggle());
    }
    return (
        <Fragment>
            {
                isAuthenticated &&
                <div className={classes["counterBox"]}>
                    <div className={classes["counterBox-child"]}>Redux Counter</div>
                    {
                        isAllowed &&
                        <div className={classes["counterBox-child"]}>{counter}</div>
                    }
                    <div className={classes["counterBox-child"]} >
                        <button className={classes["increment"]} onClick={increase}>Increment</button>
                        <button className={classes["increment"]} onClick={increaseByValue}>increase By 5</button>
                        <button className={classes["decrement"]} onClick={decrease}>Decrement</button>
                    </div>
                    <button className={classes["counterBox-child"]} onClick={toggleHandler}>Toggle Counter</button>
                </div>
            }
            {
                !isAuthenticated && <p style={{color:"white"}}>Please Login to view</p>
            }
        </Fragment>

    )
}

export default Counter;