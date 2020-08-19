import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

function TodoInput({ onSubmitTodo }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (typeof onSubmitTodo === 'function') {
      onSubmitTodo(todo);
    }
  }, [onSubmitTodo, todo]);

  const handleChange = (e) => {
    e.persist();
    setTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          type="text"
          placeholder="Your Todo"
          value={todo}
          onChange={handleChange}
          data-testid='todo-input-field'
        />
        <button type="submit" disabled={todo === ''} data-testid='todo-add-btn'>
          Add
        </button>
      </form>
    </div>
  );
}

TodoInput.propTypes = {
  onSubmitTodo: PropTypes.func,
};

export default TodoInput;
