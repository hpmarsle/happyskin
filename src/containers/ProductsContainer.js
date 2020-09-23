import React, { Component } from 'react'
import { fetchProducts } from '../actions/products'
import { connect } from 'react-redux'
import Products from '../components/Products'
import ProductPage from '../components/ProductPage'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import ReviewInputEdit from '../components/ReviewInputEdit'

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

class ProductsContainer extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        
        return (
            <Container>

                <div>
                    <Route path="/products/:productId/reviews/:reviewId" render={(routerProps) => <ReviewInputEdit {...routerProps} products={this.props.products}/> } />

                    <Route exact path='/products/:id' render={(routerProps) => <ProductPage {...routerProps} products={this.props.products} /> } />
                    <Route exact path='/' render={() => <Products products={this.props.products} /> } />
                </div>
            </Container>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}
  
export default connect(mapStateToProps, {fetchProducts})(ProductsContainer);