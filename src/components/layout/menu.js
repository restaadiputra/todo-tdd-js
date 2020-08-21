import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import NavItem from './nav-item';

function Menu({ openMenu }) {
  return (
    <div
      className={clsx([
        'w-full lg:inline-flex lg:flex-grow lg:w-auto',
        { hidden: !openMenu },
      ])}
      data-testid="menu"
    >
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
        <NavItem path="/props">Props</NavItem>
        <NavItem path="/context">Context</NavItem>
        <NavItem path="/redux">Redux</NavItem>
      </div>
    </div>
  );
}

Menu.propTypes = {
  openMenu: PropTypes.bool.isRequired,
};

export default Menu;
