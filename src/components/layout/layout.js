import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';
import MenuButton from './menu-button';
import Menu from './menu';

function Layout({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className="w-full bg-gray-800 p-3">
        <div className="max-w-2xl flex items-center flex-wrap container mx-auto">
          <Logo />
          <MenuButton onClick={handleMenuClick} />
          <Menu openMenu={openMenu} />
        </div>
      </nav>
      <main className="container max-w-lg mx-auto mt-4 px-4 sm:px-0">
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
