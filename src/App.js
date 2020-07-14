import React from 'react';
import ProductsContainer from './containers/ProductsContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navigation/Navbar';
import About from './components/navigation/About'
import Login from './components/navigation/Login' 

class App extends React.Component {

  render() {
    return (
    <div className="App">
      <Router>
      <NavBar />

        <Route path="/" component={ProductsContainer}/> 
        <Route path="/about" component={About}/> 
        <Route path="/login" component={Login}/> 
     {/*<ProductsContainer />*/}
      </Router>
    </div>
    );
  }
}

export default App;
