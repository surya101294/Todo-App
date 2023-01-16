import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos, postTodos } from './Redux/action'

const TodoInput = () => {
    const [title,setTitle]= useState("")
    const dispatch= useDispatch()
    const handleClick=()=>{
        dispatch(postTodos(title)).then(()=> dispatch(getTodos))
        setTitle("")
    }  
    
    return (
    <div>
    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
    <button onClick={handleClick} >ADD TODO</button>  
    </div>
  )
}

export default TodoInput