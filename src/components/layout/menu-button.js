import React from 'react';
import PropTypes from 'prop-types';

function MenuButton({ onClick }) {
  return (
    <button
      className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
      onClick={onClick}
      data-testid="menu-button"
    >
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="menu w-6 h-6 text-white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
