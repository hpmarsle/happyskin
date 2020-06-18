import React from 'react';
import ProductsContainer from './containers/ProductsContainer';
import { Route } from 'react-router-dom'
import NavBar from './Navbar';

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/products')
    .then(r=>r.json())
    .then(data => console.log(data))
  }

  render() {
    return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={ProductsContainer} />
     {/*<ProductsContainer />*/}
    </div>
    );
  }
}

export default App;
