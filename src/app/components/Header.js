import React from 'react';

const Header = () => {
  const renderHeader = () => (
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );

  return renderHeader();
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
