import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux'
import { openModalTasks,updateModalTask } from '../../store/travel/travelSlice';
import { useState } from 'react';
import { useForm } from '../../hook/useForm';

export const UpdateComponent = () => {


  const dispatch = useDispatch();
  const updateSelector = useSelector((state) => state.travel)
  const [openModal, setOpenModal] = useState(false);
  const { id, nametask, responsible, priority, progress, onInputChange, onResetForm, formState } = useForm({
    id: new Date().getTime(),
    nametask: '',
    responsible: '',
    priority: '',
    progress: '',
  });


  const openUpdateModal = (tasks) => {
    dispatch(openModalTasks(tasks));
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const handleUpdateTask = () => {

    dispatch(updateModalTask(formState));
    
    handleCloseModal();
  }

  return (

    <>
      <h2>Actualizar Tareas</h2>
      <div>
        {
          updateSelector.map(tasks => (
            <div key={tasks.id}>
              {/* <h4 >Tarea: 1</h4> */}
              <p>{tasks.nametask}</p>
              <p>{tasks.responsible}</p>
              <button onClick={() => openUpdateModal(tasks.id)}>Actualizar a</button>
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
    </>
  )
}
