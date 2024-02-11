import {checkingCredentials, login, logout } from "./"


export const checkingAuthenticated = () => {

    return async ( dispatch ) => {
        dispatch(login());
    }
}

export const startChekingGoogle = () => {
    
    return async ( dispatch ) => {
        dispatch(checkingCredentials());
    }
}

export const finishChekingGoogle = () => {
    
    return async ( dispatch ) => {
        dispatch(logout());
    }
}