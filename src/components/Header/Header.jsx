import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
      <div>
        <h1>This is a header </h1>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/mobile">mobile</NavLink>
          <NavLink to="/laptop">laptop</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </div>
    );
};

export default Header;