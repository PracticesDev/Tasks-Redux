import { Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaks } from '../../store/travel';

export const DeleteComponent = () => {

  const deleteSelector = useSelector((state) => state.travel);
  const dispatch = useDispatch();


  const deleteTask = (id) => {

    const saveData = localStorage.getItem("travel");
    const arrayDate = saveData ? JSON.parse(saveData) : [];
  
    const existingTaskIndex = arrayDate.findIndex(task => task.id === id);
  
    if (existingTaskIndex !== -1) {
      
      arrayDate.splice(existingTaskIndex, 1);
  
      localStorage.setItem("travel", JSON.stringify(arrayDate));
      
      dispatch(deleteTaks(id));
    } else {
      console.log('No se encontró ID');
    }
  
  }

  return (
    <>
      <Typography variant="h6" color='#005B41' margin='15px'>
        Eliminar Tareas
      </Typography>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {
          deleteSelector.map(tasks => (
            <div key={tasks.id}>
              <h3>{tasks.nametask}</h3>
              <ul>
                <ol>{tasks.responsible}</ol>
                <ol>{tasks.priority}</ol>
                <ol>{tasks.progress}</ol>
                <Button variant="outlined" startIcon={<DeleteIcon />} color='error' onClick={() => deleteTask(tasks.id)}>Eliminar</Button>
              </ul>
            </div>
          ))
        }
      </div>

    </>
  )
}
