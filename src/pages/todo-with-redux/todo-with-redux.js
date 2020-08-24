import React from 'react';
import TodoDisplayRedux from './todo-display-redux';
import TodoInputRedux from './todo-input-redux';

function TodoWithRedux() {
  return (
    <>
      <TodoInputRedux />
      <hr className="max-w-lg mx-auto my-4 border border-purple-300 rounded" />
      <TodoDisplayRedux />
    </>
  );
}

export default TodoWithRedux;
