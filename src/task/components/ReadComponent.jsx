import { CssBaseline, Typography, Box, Container } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hook/useForm';



export const ReadComponent = () => {

  const readSelector = useSelector((state) => state.travel);
  const { search, onInputChange, onResetForm } = useForm({ search: '' })



  // const searchId = (event) => {

  //   event.preventDefault();
  //   console.log('ID buscado', search);

  //   onResetForm();
  // };



  return (
    <>
      {/* <label>Buscar Tarea: </label>
      <input type="number" placeholder='Buscar por ID' name='search' value={search} onChange={onInputChange} />
      <button onClick={searchId}>Buscar</button> */}

      <Typography variant="h6" color='#005B41' margin='15px' >
        Lista de Tareas
      </Typography>
      {/* bgcolor: '#ADBC9F' */}
      <Container sx={{  width: '560px' }} style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <div >
          {
            readSelector.map(tasks => (
              <div key={tasks.id}>
                <h3>{tasks.nametask}</h3>
                <ul>
                  <ol>{tasks.responsible}</ol>
                  <ol>{tasks.priority}</ol>
                  <ol>{tasks.progress}</ol>
                </ul>
              </div>
            ))
          }
        </div>
      </Container>
    </>
  )
}
