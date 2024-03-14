import { Typography, Container } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { readingTask } from '../../store/travel/thunks';


export const ReadComponent = () => {

  const dispatch = useDispatch();
  const readSelector = useSelector((state) => state.travel);

  
  useEffect(() => {

    dispatch(readingTask());

  }, [dispatch]);

  return (
    <>

      <Typography variant="h6" color='#005B41' margin='15px' >
        Lista de Tareas
      </Typography> 

      <Container sx={{ width: '560px' }} style={{ maxHeight: '300px', overflowY: 'auto' }}>
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
