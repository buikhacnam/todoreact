import React, {useContext, useState} from 'react';
import {TodoContext} from '../contexts/TodoContext';

const NewTodoForm = () => {
    const { dispatch } = useContext(TodoContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", todo: {title, description}});
        setTitle('');
        setDescription('');
    }

    return( 
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="todo title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type='text' placeholder='description'value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type='submit' value='add todo' />
        </form>
    );
}

export default NewTodoForm;