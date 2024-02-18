import { createSlice } from '@reduxjs/toolkit';

// Función para cargar el estado inicial desde el almacenamiento local
const loadInitialState = () => {
    const savedState = localStorage.getItem('DATA');
    return savedState ? JSON.parse(savedState) : [
        {
            id: new Date().getTime(),
            nametask: '',
            responsible: '',
            priority: '',
            progress: '',
            created: false,
        }
    ];
};

// Función para guardar el estado en el almacenamiento local
const saveState = (state) => {
    localStorage.setItem('DATA', JSON.stringify(state));
};

// Obtén el estado inicial desde el almacenamiento local
const initialState = loadInitialState();

export const travelSlice = createSlice({

    name: 'travel',
    initialState,

    reducers: {

        createTask: (state, action) => {
            state.push(action.payload)
        },
        readTaks: (state, action) => {

            // const taskId = action.payload;
            // const taskToShow = state.find(task => task.id === taskId);


        },
        updataTask: (state, action) => {

        },
        deleteTaks: (state, action) => {

        },

    }
});


// Action creators are generated for each case reducer function
export default travelSlice.reducer

export const { createTask, readTaks, updataTask, deleteTaks } = travelSlice.actions;