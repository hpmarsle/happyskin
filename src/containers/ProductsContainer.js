import React, { Component } from 'react'
import { fetchProducts } from '../actions/products'
import { connect } from 'react-redux'
import Products from '../components/Products'

class ProductsContainer extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        
        return (
            <div>
                <h1>All of my products will display on the home page</h1>
                
                <Products products={this.props.products} />
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