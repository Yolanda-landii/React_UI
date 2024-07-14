import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">contracted</div>
      <nav>
        <ul>
          <li>Managerial optimization and consulting services</li>
          <li>Spans and layers</li>
          <li>Employee engagement</li>
          <li>More services</li>
          <li><button className="get-started">Get started</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
