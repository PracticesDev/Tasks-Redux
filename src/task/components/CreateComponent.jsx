import { useDispatch, useSelector } from 'react-redux'

import { Button, Typography, TextField, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import { useForm } from '../../hook/useForm';
import { createTask } from '../../store/travel/travelSlice';


export const CreateComponent = () => {
  
  const dispatch = useDispatch();

  const { nametask, responsible, priority, progress, onInputChange, onResetForm } = useForm({

    id: new Date().getTime(),
    nametask: '',
    responsible: '',
    priority: '',
    progress: ''

  });


  const onClickNewTaks = (event) => {

    event.preventDefault();

    const newTasks = {
      id: new Date().getTime(),
      nametask,
      responsible,
      priority,
      progress
    }

    const saveData = localStorage.getItem("DATA");
    const arrayDate = saveData ? JSON.parse(saveData) : [];

    arrayDate.push(newTasks);

    const datosJSON = JSON.stringify(arrayDate);
    localStorage.setItem("DATA", datosJSON);

    dispatch(createTask( newTasks ));
    onResetForm();

  }


  return (

    <>
      <Typography variant="h6" color='#005B41' margin='15px'>
        Crear Tarea
      </Typography>
      <form>
        <Grid  >
          <Grid>
            <TextField
              label="Nombre Tarea"
              type="text"
              placeholder='Descripcion de la tarea'
              name='nametask'
              value={nametask}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Resposanble"
              type="text"
              placeholder='Quien realizara la tarea'
              name='responsible'
              value={responsible}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Prioridad"
              type="text"
              placeholder='Prioridad tarea'
              name='priority'
              value={priority}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid color={'black'} item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Progreso"
              type="text"
              placeholder='Progreso de la tarea'
              name='progress'
              value={progress}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
      <Button
        onClick={onClickNewTaks}
        style={{ backgroundColor: '#ADBC9F', color: '#005B41', position: 'fixed', right: '30px', bottom: '25px', margin: '20px', fontWeight: 'bold' }}
        variant="contained"
        endIcon={<AddIcon />}
      >
        Add
      </Button>

    </>
  )
}
