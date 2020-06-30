import React from 'react'

const ProductPage = (props) => {

    console.log(props)

    let product = props.products[props.match.params.id - 1]
    console.log(product)
    return (
        <div>
            <h1>{product ? product.name : null}</h1>
        </div>
    )
}

export default ProductPage