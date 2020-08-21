import React from 'react';
import TodoProvider from './todo-provider';
import TodoInput from './todo-input-context';
import TodoDisplay from './todo-display-context';

function TodoWithContext() {
  return (
    <>
      <TodoProvider>
        <TodoInput />
        <hr className="max-w-lg mx-auto my-4 border border-orange-300 rounded" />
        <TodoDisplay />
      </TodoProvider>
    </>
  );
}

export default TodoWithContext;
