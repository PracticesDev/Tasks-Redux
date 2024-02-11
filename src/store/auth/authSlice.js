import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'Not-authenticated',
        id:null,
        email:null,
        errorMessage:null
    },
    reducers: {
        
        login: ( state ) => {
            state.status = 'Authenticated' ; 
        },
        logout: ( state  ) => {
            state.status = 'Not-Authenticated' ; 
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking' ; 
        }
    }
});


// Action creators are generated for each case reducer function
export const { login,logout,checkingCredentials} = authSlice.actions;