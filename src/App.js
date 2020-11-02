import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navigation/Navbar'
import About from './components/navigation/About'
import Login from './components/navigation/Login'
import Logout from './components/navigation/Logout'
import Home from './components/navigation/Home'
import './App.css'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
        </div>
      </Router>
    )
  }
}

export default connect(null, { getCurrentUser })(App)
