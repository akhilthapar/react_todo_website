import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,toggleComplete,editTodo,deleteTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={()=>toggleComplete(task.id)} className={`${task.completed? 'completed':''}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon onClick={()=>editTodo(task.id)}  icon={faPenToSquare}/>
            <FontAwesomeIcon onClick={()=>deleteTodo(task.id)} icon={faTrash}/>
        </div>
    </div>
  )
}
