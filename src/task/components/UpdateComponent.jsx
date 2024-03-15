import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import { useDispatch, useSelector } from 'react-redux'
import { openModalTasks, updateModalTask } from '../../store/travel';
import { useRef, useState } from 'react';
import { useForm } from '../../hook/useForm';

export const UpdateComponent = () => {


  const dispatch = useDispatch();
  const updateSelector = useSelector((state) => state.travel);
  const [openModal, setOpenModal] = useState(false);
  const selectedTaskIdRef = useRef(null);

  const { id, nametask, responsible, priority, progress, onInputChange, onResetForm } = useForm({
    id: new Date().getTime(),
    nametask: '',
    responsible: '',
    priority: '',
    progress: '',
  });


  const openUpdateModal = (tasks) => {
    selectedTaskIdRef.current = tasks.id;

    dispatch(openModalTasks(tasks));
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const handleUpdateTask = () => {
    
    const selectedTaskId = selectedTaskIdRef.current; // Accede al ID almacenado en la referencia mutable
    //console.log('ID del modal', selectedTaskId)

    const newtasks = {
      id: selectedTaskId,
      nametask,
      responsible,
      priority,
      progress
    }


    const saveData = localStorage.getItem("travel");
    const arrayDate = saveData ? JSON.parse(saveData) : [];

    const existingTaskIndex = arrayDate.findIndex(task => task.id === selectedTaskId);

    if (existingTaskIndex !== -1) {
    
      arrayDate[existingTaskIndex] = newtasks;

      localStorage.setItem("travel", JSON.stringify(arrayDate));

      dispatch(updateModalTask(newtasks));
    } else {
      console.log('No se encontró ninguna ID');
    }

    onResetForm();
    handleCloseModal();

  }

  return (

    <>
      <Typography variant="h6" color='#005B41' margin='15px'>
        Actualizar Tareas
      </Typography>
      <section style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <div>
          {
            updateSelector.map(tasks => (
              <div key={tasks.id}>
                <h3>{tasks.nametask}</h3>
                <ul>
                  <ol>{tasks.responsible}</ol>
                  <ol>{tasks.priority}</ol>
                  <ol>{tasks.progress}</ol>
                  <Button
                    variant="outlined"
                    startIcon={<UpdateIcon />}
                    onClick={() => openUpdateModal(tasks)}>
                    Actualizar
                  </Button>
                </ul>
              </div>
            ))
          }
        </div>

        <div >
          <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>Actualizar Tarea</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Nuevo nombre de tarea"
                name='nametask'
                value={nametask}
                fullWidth

                onChange={onInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Responsable de la tarea"
                name='responsible'
                value={responsible}
                fullWidth
                onChange={onInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Prioridad de la tarea"
                name='priority'
                value={priority}
                fullWidth
                onChange={onInputChange}
              />

              <TextField
                autoFocus
                margin="dense"
                type='number'
                label="Progreso de la tarea"
                name='progress'
                value={progress}
                fullWidth
                onChange={onInputChange}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={handleCloseModal}>Cancelar</Button>
              <Button onClick={() => handleUpdateTask()}>Actualizar</Button>
            </DialogActions>

          </Dialog>
        </div>

      </section>

    </>
  )
}
