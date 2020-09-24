import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'

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

          {this.props.currentUser ?  <NavLink
            to="/logout"
            exact
            className='navlink'
            activeStyle={{borderBottom: 'solid #fff'}}
          >Logout</NavLink>: <NavLink
            to="/login"
            exact
            className='navlink'
            activeStyle={{borderBottom: 'solid #fff'}}
          >Login</NavLink>
          }
          <h1 className="company">Happyskin Co.</h1>
        </div>
      )
    }
  }
  const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
  }
  export default connect(mapStateToProps)(Navbar);