// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
    counter : 0,
    isAllowed:true
}

const counterSlice = createSlice({
    name : "counter",
    initialState:initialState,
    reducers:{
        increment : (state) => {
            state.counter ++;
        },
        decrement : (state) => {
            state.counter --;
        },
        increase:(state,action) => {
            state.counter += (action.payload?action.payload : 1)
        },
        toggle:(state) => {
            state.isAllowed = !(state.isAllowed);
        }
    }
})

const authSlice = createSlice({
    name:"auth",
    initialState:{isAuthenticated:false},
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        auth:authSlice.reducer
    }
})
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;