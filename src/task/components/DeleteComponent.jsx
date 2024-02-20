import { useDispatch, useSelector } from 'react-redux';
import { deleteTaks } from '../../store/travel/travelSlice';

export const DeleteComponent = () => {

  const deleteSelector = useSelector((state) => state.travel);
  const dispatch = useDispatch();
  

  const deleteTask = (id) => {


    dispatch(deleteTaks(id));

    //console.log(deleteTask)



  }



  return (
    <>
      {/* <label>Buscar Tarea: </label>
      <input type="number" placeholder='Buscar por ID' name='search' value={search} onChange={onInputChange} />
      <button onClick={searchId}>Buscar</button> */}

      <h3>Eliminar Tareas </h3>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {
          deleteSelector.map(tasks => (
            <div key={tasks.id}>
              <h5>Tarea: { } </h5>
              <li>{tasks.nametask}</li>
              <button onClick={()=> deleteTask(tasks.id)}>Eliminar</button>
            </div>
          ))
        }
      </div>

    </>
  )
}
