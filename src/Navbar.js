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
              background: 'darkblue'
            }}
          >Home</NavLink>
          <NavLink
            to="/about"
            exact
            activeStyle={{
              background: 'darkblue'
            }}
          >About</NavLink>
          <NavLink
            to="/login"
            exact
          
            activeStyle={{
              background: 'darkblue'
            }}
          >Login</NavLink>
        </div>
      )
    }
  }
   
  export default Navbar;