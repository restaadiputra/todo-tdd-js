import React from 'react';
import todoImage from './todo.svg';

function Home() {
  return (
    <div className="max-w-lg mx-auto mt-4 flex flex-col items-center justify-center">
      <img
        src={todoImage}
        alt="todo"
        className="mt-8 mb-12 w-48 md:w-56 lg:w-64"
      />
      <p className="text-gray-800 text-lg text-center px-6 mb-4">
        Just 3 simple todo app with 3 different method of state management. Use
        menu above to try each todo.
      </p>
      <p className="text-gray-800 text-lg text-center px-6">
        All data will be lost when you try to switch route or refresh.
      </p>
    </div>
  );
}

export default Home;
