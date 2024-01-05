import React, {useState} from 'react'

export const TodoForm = ({addtodo}) => {
    const [value, setValue]= useState("")
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addtodo(value)
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} className='todo-input' placeholder='What is the task today?' />
        <button disabled ={!value} type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}
