import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavItem({ path, children }) {
  const onActive = (_, location) => {
    return location.pathname === path;
  };

  return (
    <NavLink
      to={path}
      exact
      isActive={onActive}
      activeClassName="bg-gray-900 text-white"
      className="w-full px-3 py-2 rounded mr-2 hover:bg-gray-900 hover:text-white"
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
