import React, { useContext } from 'react';
import {TodoContext} from '../contexts/TodoContext';

const TodoDetails = ({ todo }) => {
    const { dispatch } = useContext(TodoContext)
    return (
        <li onClick={() => dispatch({type: "REMOVE_TODO", id: todo.id})}>
            <div className="title">{todo.title}</div>
            <div className="description">{todo.description}</div>
        </li>
    );
}

export default TodoDetails;