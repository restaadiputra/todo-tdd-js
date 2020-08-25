import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import NavItem from './nav-item';

function Menu({ openMenu }) {
  return (
    <div
      className={clsx([
        {
          'max-h-0': !openMenu,
          'max-h-200': openMenu,
        },
        'w-full overflow-hidden items-start flex flex-col text-gray-400 transition-all duration-500 ease-in-out',
        'lg:max-h-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto',
      ])}
      data-testid="menu"
    >
      <NavItem path="/props">Props</NavItem>
      <NavItem path="/context">Context</NavItem>
      <NavItem path="/redux">Redux</NavItem>
    </div>
  );
}

Menu.propTypes = {
  openMenu: PropTypes.bool.isRequired,
};

export default Menu;
