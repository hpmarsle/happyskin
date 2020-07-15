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
            activeStyle={{borderBottom: 'solid #fff'}}
          >Home</NavLink>

          <NavLink
            to="/about"
            exact
            className='navlink'
            activeStyle={{borderBottom: 'solid #fff'}}
          >About</NavLink>

          <NavLink
            to="/login"
            exact
            className='navlink'
            activeStyle={{borderBottom: 'solid #fff'}}
          >Login</NavLink> <br />
          <h1 className="company">Happyskin Co.</h1>
        </div>
      )
    }
  }
   
  export default Navbar;