import { createSlice } from '@reduxjs/toolkit';

export const travelSlice = createSlice({
    name: 'travel',
    initialState: {
        isSaving: true,
        messageSaved: '',
        note: [],
        active:null,
        // active: {
        //     id: 'ABC',
        //     nameTask: '',
        //     responsible: '',
        //     taskinit: '',
        //     taskfinish: '',
        // }
    },
    reducers: {

        createTask: (state, action) => {

        },
        readTaks: (state, action) => {

        },
        updataTask: (state, action) => {

        },
        deleteTaks: (state, action) => {

        },

    }
});


// Action creators are generated for each case reducer function
export const {
        createTask,
        readTaks,
        updataTask,
        deleteTaks,
    } = travelSlice.actions;