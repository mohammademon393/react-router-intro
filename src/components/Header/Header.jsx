import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const Header = () => {
    return (
      <div>
        <h1>This is a header </h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/mobile">mobile</Link>
          <Link to="/laptop">laptop</Link>
        </nav>
      </div>
    );
};

export default Header;