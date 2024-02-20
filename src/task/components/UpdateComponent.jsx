import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../../store/travel/travelSlice';

export const UpdateComponent = () => {

  const updateSelector = useSelector((state) => state.travel)
  const dispatch = useDispatch();


  const update = (id) => {

    dispatch(updateTask(id))

  }

  return (

    <>
      <h4>Actualizar Tarea</h4>
      <ul>
        {
          updateSelector.map(tasks => (
            <div key={tasks.id}>
              <h6>{tasks.id}</h6>
              <button onClick={() => update(tasks.id)}>Actualizar</button>
            </div>
          ))

        }
      </ul>

    </>
  )
}
