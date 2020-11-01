import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
import ReviewInput from '../components/ReviewInput'

const ProductPage = (props) => {
  let product = props.products.find(
    (product) => product.id == props.match.params.id
  )

  return (
    <div className='productShowPage'>
      <div className='productPageImage'>
        {product ? (
          <img
            src={product.image}
            alt='product displayed '
            max-width='500px'
            max-height='500px'
          />
        ) : null}
      </div>
      <div className='productPageDetails'>
        <h1>{product ? product.name : null}</h1>
        <h3>{product ? product.brand : null}</h3>
        <h3>${product ? product.price : null}0</h3>
        <p>{product ? product.ingredients : null}</p>
      </div>
      <ReviewInput product={product} />
      <ReviewsContainer product={product} />
    </div>
  )
}

export default ProductPage
