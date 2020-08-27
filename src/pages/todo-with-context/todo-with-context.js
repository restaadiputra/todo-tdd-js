import React from 'react';
import TodoProvider from './todo-provider';
import TodoInput from './todo-input-context';
import TodoDisplay from './todo-display-context';
import TodoFilterContext from './todo-filter-context';

function TodoWithContext() {
  return (
    <div className="relative">
      <TodoProvider>
        <TodoInput />
        <TodoFilterContext />
        <hr className="max-w-lg mx-auto my-4 border border-orange-300 rounded" />
        <TodoDisplay />
      </TodoProvider>
    </div>
  );
}

export default TodoWithContext;
