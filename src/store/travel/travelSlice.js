import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: new Date().getTime(),
    nametask: '',
    responsible: '',
    priority: '',
    progress: '',
    created: false,
}


export const travelSlice = createSlice({

    name: 'travel',
    initialState,

    reducers: {

        createTask: ( state, action ) => {

            const { nametask, responsible, priority, progress } = action.payload;
            state.nametask = nametask;
            state.responsible = responsible;
            state.priority = priority;
            state.progress = progress;
            state.created = true;

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
export const { createTask, readTaks, updataTask, deleteTaks } = travelSlice.actions;