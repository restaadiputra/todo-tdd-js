import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="max-w-lg mx-auto mt-4 flex flex-col items-center justify-center">
      <div className="flex justify-center items-center mb-4">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="exclamation w-6 h-6 text-blue-800 mr-3"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="text-blue-800 text-lg">
          The page you are trying to access doesn't exists.
        </p>
      </div>
      <NavLink
        to="/"
        className="text-blue-400 font-bold text-lg hover:underline"
      >
        Back to Home
      </NavLink>
    </div>
  );
}

export default NotFound;
