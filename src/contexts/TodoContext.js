import React, { createContext , useReducer, useEffect } from 'react';
import {v4 as uuidv4 } from 'uuid';



export const TodoContext = createContext();

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                title: action.todo.title,
                description: action.todo.description,
                id: uuidv4()
            }]
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}

const TodoContextProvider = ({children}) => {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const localData = localStorage.getItem("todos");
        return localData ? JSON.parse(localData) : [];
    }); 
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])   
    
    return(
        <TodoContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;