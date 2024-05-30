import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

const Column = ({ title, tasks, id}) => {
  return (
    <div>
      <h3>{title}</h3>
     <Droppable droppableId={id}>
        {(provided, snapshot) =>{
            <TaskList 
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
               {/* Provide Taks */}

                {provided.placeholder}
                </TaskList>
        }}

     </Droppable>
    </div>
  )
}

export default Column