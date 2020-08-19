import React from 'react';
import PropTypes from 'prop-types';

function TodoInput({ onSubmitTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmitTodo === 'function') {
      onSubmitTodo(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="todo" type="text" placeholder="Your Todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

TodoInput.propTypes = {
  onSubmitTodo: PropTypes.func,
};

export default TodoInput;
