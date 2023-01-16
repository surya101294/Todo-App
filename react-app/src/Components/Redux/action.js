import axios from "axios";
import {
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  TOGGLE_TODO_REQUEST,
  TOGGLE_TODO_SUCCESS,
} from "./actionType";

//GET

export const todoGetRequestAction = () => {
  return { type: GET_TODO_REQUEST };
};

export const todoGetSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};

export const todoGetFailureAction = () => {
  return { type: GET_TODO_FAILURE };
};

//POST

export const todoPostRequestAction = () => {
  return { type: POST_TODO_REQUEST };
};

export const todoPostSuccessAction = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};

export const todoPostFailureAction = () => {
  return { type: POST_TODO_FAILURE };
};

//PATCH
export const todoToggleRequestAction=()=>{
  return {type:TOGGLE_TODO_REQUEST}
}
export const todoToggleSuccessAction=(payload)=>{
  return {type:TOGGLE_TODO_SUCCESS, payload}
}
export const todoToggleFailureAction=()=>{
  return {type:TOGGLE_TODO_FAILURE}
}
// DELETE
export const todoDeleteRequestAction=()=>{
  return {type:DELETE_TODO_REQUEST}
}
export const todoDeleteSuccessAction=(payload)=>{
  return {type:DELETE_TODO_SUCCESS, payload}
}
export const todoDeleteFailureAction=()=>{
  return {type:DELETE_TODO_FAILURE}
}

export const getTodos=(dispatch)=>{
    dispatch (todoGetRequestAction())
   return axios.get(`http://localhost:8080/todos`)
    .then((res)=>{
        console.log(res.data);
       dispatch(todoGetSuccessAction(res.data))
    })
    .catch(()=> dispatch(todoGetFailureAction()))
}

export const postTodos=(title)=> (dispatch)=>{
  let newTodo={
    title,
    status:false
  }
   dispatch(todoPostRequestAction())
  return axios.post(`http://localhost:8080/todos`,
  newTodo).then((res)=> dispatch(todoPostSuccessAction(res.data)))
  .catch(()=> dispatch(todoPostFailureAction()))
}

export const toggleTodo=(id,newStatus)=>(dispatch)=>{
  dispatch(todoToggleRequestAction())
  return axios.patch(`http://localhost:8080/todos/${id}`,{status: !newStatus} )
  .then((res)=> dispatch(todoToggleSuccessAction(res.data)))
  .catch(()=> dispatch(todoToggleFailureAction()))
}

export const deleteTodo=(id)=>(dispatch)=>{
  dispatch(todoDeleteRequestAction())
  axios.delete(`http://localhost:8080/todos/${id}`)
  .then((res)=> dispatch(todoDeleteSuccessAction(res.data)))
  .catch(()=> dispatch(todoDeleteFailureAction()))
}