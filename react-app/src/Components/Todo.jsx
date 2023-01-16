import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getTodos, toggleTodo } from './Redux/action'
import { store } from './Redux/store'
import TodoInput from './TodoInput'

const Todo = () => {

    const dispatch=useDispatch()

    // const {todos, isLoading}= useSelector((store)=> store.todos, store.isLoading)

    // const {todos, isLoading}= useSelector((store)=> {
    //     return {todos: store.todos,
    //         isLoading: store.isLoading
    //      }} )
    const todos = useSelector((store)=> store.todos)
         console.log("todos:", todos);
        //  dispatch(getTodos)
useEffect(()=>{
    dispatch(getTodos)
},[])
  // useEffect(()=>{ 
  const handleToggle=(id,status)=>{
    dispatch(toggleTodo(id,status))
    .then(()=> dispatch(getTodos))
  }
// },[])
  const handleDelete=(id)=>{
    dispatch(deleteTodo(id)).then(()=>dispatch(getTodos))
  }

  return (
    <div>
        <h3>Todo  App</h3>
        <TodoInput />
      {todos.length>0 && todos.map((el)=>{
       return <div key={el.id}>
         {el.title} {el.status? "Completed" : "Pending"}
       <button onClick={handleToggle(el.id, el.status)}>Toggle</button>
       <button onClick={()=>handleDelete(el.id)}>Delete</button>
       </div>
      })}
    </div>
  )
}

export default Todo
