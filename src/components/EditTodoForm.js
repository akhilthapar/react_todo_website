import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue]= useState(task.task)
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
        console.log(value,"edit value");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} className='todo-input'  />
        <button disabled={!value} type='submit' className='todo-btn'>Update task</button>
    </form>
  )
}
