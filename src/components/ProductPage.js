import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
import styled from 'styled-components'


const ProductPage = (props) => {

    console.log(props)

    let product = props.products.filter(product => product.id == props.match.params.id)[0]
    console.log(product)
    return (
        
        <div>

                <div>
                    {product ? <img src={product.image} alt="product" width="500px" height="500px" /> : null}
                </div>
                <div>

                    <h1>{product ? product.name : null}</h1>
                    <h3>{product ? product.brand : null}</h3>
                    <h3>${product ? product.price : null}0</h3>
                    <p>{product ? product.ingredients : null}</p>
                </div>
                <ReviewsContainer product={product} />
 
        </div>
    )
}

export default ProductPage