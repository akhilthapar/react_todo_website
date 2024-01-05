import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

const getLocalItems=()=>{
    let list =localStorage.getItem('list')
    if(list){
        return JSON.parse(list)
    }
    else{
        return []
    }
}

export const TodoWrapper = () => {
  const [todos, setTodos] = useState(getLocalItems);
  
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(todos))
  },[todos])

  const addTodo = (Ltodo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: Ltodo, completed: false, isedited: false },
    ]);
  };
  console.log(todos, "dd");

//   To mark edit in UI
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo=id=>{
    setTodos(
        todos.map((todo)=>(
            todo.id===id? {...todo, isedited: !todo.isedited} :todo
        ))
    )
  }

  const deleteTodo= id=>{
    setTodos(
        todos.filter(todo=>todo.id !==id )
    )
  }

  const editTask=(task,id)=>{
    setTodos(todos.map(todo=>(
        todo.id ===id? {...todo, task, isedited : !todo.isedited}:todo
    ))
  )}

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addtodo={addTodo}></TodoForm>
      {todos.map((todo, index) => (
        todo.isedited ?
        <EditTodoForm editTodo={editTask} task={todo}/> :
        <Todo task={todo} key={index} toggleComplete={toggleComplete} editTodo={editTodo} deleteTodo={deleteTodo}></Todo>
      ))}
    </div>
  );
};
