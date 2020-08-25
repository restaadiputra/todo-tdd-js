import React from 'react';
import PropTypes from 'prop-types';
import filterType from 'configs/filter';

function TodoDisplayProps({
  todoList,
  onRemoveTodo,
  onChangeTodoStatus,
  filter = filterType.all.value,
}) {
  const { all, complete, notComplete } = filterType;
  return (
    <div data-testid="todo-display">
      {!todoList || todoList.length === 0 ? (
        <div className="mx-auto px-4 py-2 rounded">
          <p className="text-lg text-center text-gray-500">
            Todo List is Empty
          </p>
        </div>
      ) : (
        todoList
          .filter((todo) => {
            if (filter === all.value) return true;
            else if (filter === complete.value) return todo.status;
            else if (filter === notComplete.value) return !todo.status;
            else return false;
          })
          .map((todo, index) => (
            <div
              key={index}
              className="mt-4 mx-auto px-4 py-2 rounded border-2 flex items-center transition duration-500 ease-in-out"
            >
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 mr-4 text-gray-500 border-gray-500 outline-none"
                checked={todo.status}
                onChange={() => onChangeTodoStatus(todo.id)}
              />
              <p
                className={
                  'text-lg text-left flex-grow break-words w-5/6 transition-colors duration-500 ease-in-out ' +
                  (todo.status ? 'text-gray-500 line-through' : 'text-gray-700')
                }
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

TodoDisplayProps.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func.isRequired,
  onChangeTodoStatus: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default TodoDisplayProps;
