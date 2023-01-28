import React from 'react'
import { DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, EDIT_TODO_FAILURE, EDIT_TODO_REQUEST, EDIT_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, 
    POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS, 
    TOGGLE_TODO_FAILURE, TOGGLE_TODO_REQUEST, TOGGLE_TODO_SUCCESS, 
} from './actionType'

const initialState={
    todos:[],
    isLoading:false,
    isError:false
}
const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case GET_TODO_REQUEST:
            return {...state, isLoading:true}
        case GET_TODO_SUCCESS:
            return {...state, isLoading:false, todos:payload}
        case GET_TODO_FAILURE:
            return {...state, isError:true}
            
        case POST_TODO_REQUEST:
            return {...state, isLoading:true}
        case POST_TODO_SUCCESS:
            return {...state, isLoading:false, todos:payload}       //check [...state.todos, payload]
        case POST_TODO_FAILURE:
            return {...state, isError:true}  
         
        case TOGGLE_TODO_REQUEST:
            return {...state, isLoading:true}
        case TOGGLE_TODO_SUCCESS:
            return {...state, isLoading:false, todos:payload}    
        case TOGGLE_TODO_FAILURE:
            return {...state, isError:true}  
            
        case DELETE_TODO_REQUEST:
            return {...state, isLoading:true}
        case DELETE_TODO_SUCCESS:
            return {...state, isLoading:false, todos:state.todos.filter((el)=>el.id!==payload )}
        case DELETE_TODO_FAILURE:
            return {...state, isError:true}       
            
        case EDIT_TODO_REQUEST:
            return {...state, isLoading:true}
        case EDIT_TODO_SUCCESS:
            return {...state, isLoading:false, todos:payload}
        case EDIT_TODO_FAILURE:
            return {...state, isError:true}
                        
        default: return state
    }
}

export default reducer
