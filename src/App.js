import React from 'react';
import ProductsContainer from './containers/ProductsContainer';
import { Route } from 'react-router-dom'
import NavBar from './Navbar';
import { fetchProducts } from './actions/products'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchProducts()
  }

  render() {
    return (
    <div className="App">
      <NavBar />
      
     <ProductsContainer />
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {products: state.products, loading: state.loading}
}

export default connect(mapStateToProps, {fetchProducts})(App);
