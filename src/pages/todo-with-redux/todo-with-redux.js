import React from 'react';
import TodoDisplayRedux from './todo-display-redux';
import TodoInputRedux from './todo-input-redux';
import TodoFilterContext from './todo-filter-redux';

function TodoWithRedux() {
  return (
    <div className="relative">
      <TodoInputRedux />
      <TodoFilterContext />
      <hr className="max-w-lg mx-auto my-4 border border-purple-300 rounded" />
      <TodoDisplayRedux />
    </div>
  );
}

export default TodoWithRedux;
