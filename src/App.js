import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navigation/Navbar';
import About from './components/navigation/About'
import Login from './components/navigation/Login' 
import Home from './components/navigation/Home' 
import './App.css'

class App extends React.Component {

  render() {
    return (
    <div className="App">
      <Router>
      <NavBar />

        <Route path="/" component={Home}/> 
        <Route path="/about" component={About}/> 
        <Route path="/login" component={Login}/> 
     {/*<ProductsContainer />*/}
      </Router>
    </div>
    );
  }
}

export default App;
