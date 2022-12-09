import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import React from 'react';
import TodosContextProvider from './store/todos-context';

function App() {
  


  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
