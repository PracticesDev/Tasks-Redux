import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hook/useForm';



export const ReadComponent = () => {

  const readSelector = useSelector((state) => state.travel);
  const { search, onInputChange, onResetForm } = useForm({ search: '' })

  

  const searchId = (event) => {

    event.preventDefault();
    console.log('ID buscado', search);

    onResetForm();
  };



  return (
    <>
      <label>Buscar Tarea: </label>
      <input type="number" placeholder='Buscar por ID' name='search' value={search} onChange={onInputChange} />
      <button onClick={searchId}>Buscar</button>

      <h1>LISTADO DE TAREAS: { readSelector.length }</h1>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }} >
        {
          readSelector.map(tasks => (
            <div key={tasks.id}>
              <li>{tasks.nametask}</li>
              <li>{tasks.responsible}</li>
              <li>{tasks.priority}</li>
              <li>{tasks.progress}</li>
            </div>
          ))
        }
      </div>

    </>


  )
}
