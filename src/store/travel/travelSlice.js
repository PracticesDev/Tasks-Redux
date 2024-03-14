import { createSlice } from '@reduxjs/toolkit';


const initialState = [{
    id: new Date().getTime(),
    nametask: '',
    responsible: '',
    priority: '',
    progress: '',
}];


const getLocalStorageState = () => {
    const localState = localStorage.getItem('travel');
    return localState ? JSON.parse(localState) : initialState;
};

export const travelSlice = createSlice({

    name: 'travel',
    initialState: 
    // [{
    //     id: new Date().getTime(),
    //     nametask: '',
    //     responsible: '',
    //     priority: '',
    //     progress: '',
    // }],
    
    
    getLocalStorageState(),

    reducers: {

        createTask: (state, action) => {

            const newTask = action.payload;
            state.push(newTask);

        },
        readTaks: (state, action) => {

            const leerTask = action.payload;
            //console.log("Data", leerTask)


        },
        openModalTasks: (state, action) => {

            const openModal = action.payload;
            //console.log('ID para actualizar:', openModal);

        },
        updateModalTask: (state, action) => {

            const updatedTask = action.payload;
            //console.log('El action.payload trae:', updatedTask);

            const updatedState = state.map(task => {
                if (task.id === updatedTask.id) {
                    return {
                        ...task,
                        nametask: updatedTask.nametask,
                        responsible: updatedTask.responsible,
                        priority: updatedTask.priority,
                        progress: updatedTask.progress
                    };
                }
                return task;
            });
            //console.log("Estado actualizado:", updatedState);
            return updatedState;

        },

        deleteTaks: (state, action) => {

            // const taksDelete = state.find(task => task.id === action.payload)
            // if (taksDelete) {
            //     state.splice(state.indexOf(taksDelete), 1)
            // }
            // localStorage.setItem('travel', JSON.stringify(state.tasks));
        },
    }
});

export default travelSlice.reducer

export const { createTask, readTaks, openModalTasks, updateModalTask, deleteTaks } = travelSlice.actions;