import { createSlice } from '@reduxjs/toolkit';


export const travelSlice = createSlice({

    name: 'travel',
    initialState: [
        {
            id: new Date().getTime(),
            nametask: '',
            responsible: '',
            priority: '',
            progress: ''

        }
    ],
    reducers: {

        createTask: (state, action) => {

            const newTask = action.payload;
            state.push(newTask);

        },
        readTaks: (state, action) => {

            // const taskId = action.payload;
            // const taskToShow = state.find(task => task.id === taskId)
        },
        openModalTasks: (state, action) => {

            const openModal = action.payload;
            console.log('ID para actualizar:', openModal);

        },
        updateModalTask: (state, action) => {

            const updatedTask = action.payload;
            console.log('El action.payload trae:', updatedTask);
            
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
            console.log("Estado actualizado:", updatedState);
            return updatedState;

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

export const { createTask, readTaks, openModalTasks, updateModalTask, deleteTaks } = travelSlice.actions;