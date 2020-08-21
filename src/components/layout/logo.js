import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/" className="p-2 mr-4 inline-flex items-center">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="clipboard w-6 h-6 text-white mr-2"
      >
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
      </svg>
      <span className="text-xl text-white font-bold uppercase tracking-wide">
        Simple Todo
      </span>
    </NavLink>
  );
}

export default Logo;
