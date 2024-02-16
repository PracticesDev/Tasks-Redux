

// export const createTask = () => {

//     return async (dispatch) => {


//         // const {id} = getState().auth;
//         console.log('Crear tarea')

//         const newTask = {

//             id: new Date().getTime(),
//             nametask:'',
//             responsible:'',
//             priority:'',
//             state:''
//         }

        
//         const createJSON = JSON.stringify(newTask)

//         localStorage.setItem('misDatos', createJSON);

//         const datos = localStorage.getItem('misDatos');
//         const datosRecuperados = JSON.parse(datos) || {};
        
//         console.log(datosRecuperados)

//         dispatch(createTask(newTask))


//     }

// }