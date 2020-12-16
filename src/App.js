import React from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';


const App = () => {
  return (
    <div className="App">
      <TodoContextProvider>
        <NewTodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
