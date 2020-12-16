import React, {useContext} from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoDetails from './TodoDetails';

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div className="todo-list">
            <ul>
                {todos.map(todo => {
                    return ( 
                     <TodoDetails todo={todo} key={todo.id} />
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoList;