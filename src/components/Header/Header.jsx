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
          <NavLink to="/users2">Users-2</NavLink>
        </nav>
      </div>
    );
};

export default Header;