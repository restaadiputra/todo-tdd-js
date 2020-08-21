import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavItem({ path, children }) {
  return (
    <NavLink
      to={path}
      className="w-full px-3 py-2 rounded text-gray-400 hover:bg-gray-900 hover:text-white"
    >
      <span>{children || ''}</span>
    </NavLink>
  );
}

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default NavItem;
