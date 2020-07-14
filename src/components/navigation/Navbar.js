import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
      return (
        <div className='navbar'>
          <NavLink
            to="/"
            exact
            className='navlink'
          >Home</NavLink>

          <NavLink
            to="/about"
            exact
            className='navlink'
          >About</NavLink>

          <NavLink
            to="/login"
            exact
            className='navlink'
          >Login</NavLink>
        </div>
      )
    }
  }
   
  export default Navbar;