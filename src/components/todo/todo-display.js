import React from 'react';
import PropTypes from 'prop-types';

function TodoListDisplay({ todoList }) {
  return (
    <div data-testid="todo-display">
      {!todoList || todoList.length === 0 ? (
        <p>Todo List is Empty</p>
      ) : (
        todoList.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))
      )}
    </div>
  );
}

TodoListDisplay.propTypes = {
  todoList: PropTypes.array,
};

export default TodoListDisplay;
