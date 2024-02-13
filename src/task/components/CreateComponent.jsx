import { useDispatch } from 'react-redux'

import { Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import { createTask } from '../../store/travel/thunks';

export const CreateComponent = () => {

  const dispatch = useDispatch();

  const onClickNewTaks = () => {
 
    dispatch( createTask() );

  }


  return (

    <>
      <Typography variant="h6" color='#E1F0DA'>
        Crear Tarea
      </Typography>
      <Button
        onClick={onClickNewTaks}
        style={{ backgroundColor: '#E1F0DA', color: 'black', position: 'fixed', right: '20px', bottom: '20px', margin: '10px' }}
        variant="contained"
        endIcon={<AddIcon />}
      >
        Add
      </Button>

    </>
  )
}
