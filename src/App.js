import React from 'react';
import ProductsContainer from './containers/ProductsContainer';
import { Route } from 'react-router-dom'
import NavBar from './Navbar';

class App extends React.Component {

  render() {
    return (
    <div className="App">
      <NavBar />
     <ProductsContainer />
    </div>
    );
  }
}

export default App;
