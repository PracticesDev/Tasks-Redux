import { useSelector } from 'react-redux'


export const ReadComponent = () => {


  console.log('leer')

  const readSelector = useSelector((state) => state.travel);


  console.log('mis tareas creadas son ')
  console.log( readSelector)




  //const listTask = () => {




  // const saveData = localStorage.getItem("DATA");

  // if (saveData) {

  //   const arrayDate = JSON.parse(saveData);

  //   // Supongamos que tienes un ID específico
  //   const idNuevo = taskToShow.id// Cambia esto por el ID que estés buscando

  //   // Buscar el objeto con el ID específico
  //   var objetoEncontrado = arrayDate.find(function (item) {
  //     return item.id === idNuevo ;
  //   });

  //   // Verificar si se encontró el objeto
  //   if (objetoEncontrado) {
  //     // El objeto con el ID específico se encontró
  //     console.log("Objeto encontrado:", objetoEncontrado);
  //   } else {
  //     // El objeto con el ID específico no se encontró
  //     console.log("No se encontró ningún objeto con el ID especificado.");
  //   }
  // } else {
  //   // No hay datos guardados en el localStorage
  //   console.log("No hay datos guardados en el localStorage.");
  // }



  // //console.log(readTaks)

  //}

  return (
    <>
      <h1>LISTADO DE TAREAS:</h1>
      <div>
        {
          readSelector.map( tasks => (
            <div key={tasks.id}>
              <h2>Tareas Creadas</h2>
              <h3>{tasks.id}</h3>
              <h3>{tasks.nametasks}</h3>
              <li>{tasks.responsible}</li>

            </div>
          ))
        }
      </div>

    </>


  )
}
