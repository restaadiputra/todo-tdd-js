import React from 'react';
import PropTypes from 'prop-types';

function TodoListDisplay({ todoList, onRemoveTodo }) {
  const handleTodoDelete = (id) => {
    if (typeof onRemoveTodo === 'function') {
      onRemoveTodo(id);
    }
  };

  return (
    <div data-testid="todo-display">
      {!todoList || todoList.length === 0 ? (
        <div>
          <p>Todo List is Empty</p>
        </div>
      ) : (
        todoList.map((todo, index) => (
          <div key={index}>
            <p>{todo.title}</p>
            <button onClick={() => handleTodoDelete(todo.id)}>x</button>
          </div>
        ))
      )}
    </div>
  );
}

TodoListDisplay.propTypes = {
  todoList: PropTypes.array,
};

export default TodoListDisplay;
