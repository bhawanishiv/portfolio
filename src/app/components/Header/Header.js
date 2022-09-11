import React from 'react';

import './Header.Module.scss';

const Header = ({ logoUrl, logoAlt }) => {
  const renderHeader = () => (
    <header className="app-header">
      <div className="app-container">
        <a href="/">
          <img src={logoUrl} alt={logoAlt} className="app-header__logo" />
        </a>
      </div>
    </header>
  );

  return renderHeader();
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
