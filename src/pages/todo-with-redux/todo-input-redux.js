import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/todoSlice';

function TodoInputRedux() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  };

  const handleChange = (e) => {
    e.persist();
    setTodo(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="w-full rounded-l border-2 border-r-0 border-purple-300 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="ml-4 h-6 w-6 text-purple-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <input
            name="todo"
            type="text"
            placeholder="Your Todo"
            value={todo}
            onChange={handleChange}
            data-testid="todo-input-field"
            className="px-4 py-2 w-full placeholder-opacity-50 placeholder-purple-500 outline-none text-400 text-purple-600"
          />
        </div>
        <button
          type="submit"
          disabled={todo === ''}
          data-testid="todo-add-btn"
          className="rounded-r border-2 border-purple-300 h-full px-4 py-2 text-purple-500 bg-purple-300 whitespace-no-wrap transition duration-500 ease-in-out hover:bg-purple-400 hover:text-purple-200 hover:border-purple-400"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoInputRedux;
