import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodoById, updateTodoById } from 'store/todoSlice';

function TodoDisplayRedux() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);

  return (
    <div data-testid="todo-display" className="max-w-lg mx-auto mt-4">
      {!todoList || todoList.length === 0 ? (
        <div className="mx-auto px-4 py-2 rounded">
          <p className="text-lg text-center text-purple-500">
            Todo List is Empty
          </p>
        </div>
      ) : (
        todoList.map((todo, index) => (
          <div
            key={index}
            className="mt-4 mx-auto px-4 py-2 rounded border-2 border-purple-300 flex items-center transition duration-500 ease-in-out"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 mr-4 text-purple-500 border-purple-500 outline-none"
              checked={todo.status}
              onChange={() => dispatch(updateTodoById(todo.id))}
            />
            <p
              className={
                'text-lg text-left flex-grow break-words w-5/6 transition-colors duration-500 ease-in-out ' +
                (todo.status
                  ? 'text-purple-500 line-through'
                  : 'text-purple-700')
              }
              data-testid="todo-title"
            >
              {todo.title}
            </p>
            <button
              onClick={() => dispatch(deleteTodoById(todo.id))}
              className="flex-shrink-0 ml-3 focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="x-circle w-6 h-6 text-purple-500 transition duration-500 ease-in-out hover:text-purple-700"
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

export default TodoDisplayRedux;
