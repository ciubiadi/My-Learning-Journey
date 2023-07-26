// import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
// const redux = require('redux');


const INITIAL_AUTH_STATE = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: INITIAL_AUTH_STATE,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }

});

export const authActions = authSlice.actions;

export default authSlice.reducer;