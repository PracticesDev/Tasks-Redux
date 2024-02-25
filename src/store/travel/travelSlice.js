import { createSlice } from '@reduxjs/toolkit';

// Función para cargar el estado inicial desde el almacenamiento local
const loadInitialState = () => {
    const savedState = localStorage.getItem('DATA');
    return savedState ? JSON.parse(savedState) : [
        {
            // id: '',
            // nametask: '',
            // responsible: '',
            // priority: '',
            // progress: '',
            // created: false,
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
        openModalTasks: ( state, action ) => {
            const openModal = action.payload;
            console.log('ID del modal para actualizar:',openModal)

        }, 
        updateModalTask: (state, action) => {
           
            const updatedTask= action.payload;
            console.log(updatedTask)


        },
        deleteTaks: (state, action) => {

            const taksDelete = state.find(task => task.id === action.payload)
            if (taksDelete) {
                state.splice(state.indexOf(taksDelete), 1)
            }
        },

    }
});

export default travelSlice.reducer

export const { createTask, readTaks, openModalTasks,updateModalTask, deleteTaks } = travelSlice.actions;