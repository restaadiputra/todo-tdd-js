import React from 'react';
import PropTypes from 'prop-types';

function TodoListDisplay({ todoList, onRemoveTodo, onChangeTodoStatus }) {
  return (
    <div data-testid="todo-display" className="max-w-lg mx-auto mt-4">
      {!todoList || todoList.length === 0 ? (
        <div className="mx-auto px-4 py-2 rounded">
          <p className="text-lg text-center text-gray-500">
            Todo List is Empty
          </p>
        </div>
      ) : (
        todoList.map((todo, index) => (
          <div
            key={index}
            className="mt-4 mx-auto px-4 py-2 rounded border-2 flex items-center transition duration-500 ease-in-out"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 mr-4 text-green-600 border-gray-500 outline-none"
              checked={todo.status === 'done'}
              onChange={() => onChangeTodoStatus(todo.id)}
            />
            <p
              className="text-lg text-left text-gray-700 flex-grow break-words w-5/6"
              data-testid="todo-title"
            >
              {todo.title}
            </p>
            <button
              onClick={() => onRemoveTodo(todo.id)}
              className="flex-shrink-0 ml-3 focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="x-circle w-6 h-6 text-gray-500 transition duration-500 ease-in-out hover:text-gray-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        ))
      )}
    </div>
  );
}

TodoListDisplay.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onChangeTodoStatus: PropTypes.func,
};

export default TodoListDisplay;
