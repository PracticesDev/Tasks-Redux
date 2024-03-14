import { useDispatch, useSelector } from 'react-redux'

import { Button, Typography, TextField, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import { useForm } from '../../hook/useForm';
import { createTask } from '../../store/travel/travelSlice';
import { useEffect } from 'react';


export const CreateComponent = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.travel);

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

    const saveData = localStorage.getItem("travel");
    const arrayDate = saveData ? JSON.parse(saveData) : [];

    arrayDate.push(newTasks);

    localStorage.setItem("travel", JSON.stringify(arrayDate));

    dispatch(createTask(newTasks));
    onResetForm();

  }

  useEffect(() => {
    //console.log('Estado actualizado:', tasks);
  }, [tasks]);


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
              label="Responsable"
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
              type="number"
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
