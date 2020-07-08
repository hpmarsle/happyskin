import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
      return (
        <div>
          <NavLink
            to="/"
            
            exact
           
            activeStyle={{
              padding: '1000px'
            }}
          >Home</NavLink>

          <NavLink
            to="/about"
            exact
          >About</NavLink>

          <NavLink
            to="/login"
            exact
          >Login</NavLink>
        </div>
      )
    }
  }
   
  export default Navbar;