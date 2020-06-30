import React, { Component } from 'react'
import { fetchProducts } from '../actions/products'
import { connect } from 'react-redux'
import Products from '../components/Products'
import ProductPage from '../components/ProductPage'
import { Route } from 'react-router-dom'

class ProductsContainer extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        
        return (
            <div>
                <h1>All of my products will display on the home page</h1>
                <Route exact path='/products/:id' render={(routerProps) => <ProductPage {...routerProps} products={this.props.products} /> } />
                <Route exact path='/' render={() => <Products products={this.props.products} /> } />
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        products: state.productsReducer.products
    }
}
  
export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);