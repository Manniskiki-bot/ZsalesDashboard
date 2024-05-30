import React, { useState} from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

const KanbarnBoard = () => {
    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([])

  return (
    <DragDropContext>
       <h2>Progress Board</h2>
       <div className='flex'></div>

    </DragDropContext>
  )
}

export default KanbarnBoard