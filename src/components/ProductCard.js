import React from 'react'

const ProductCard = (props) => {
    return (
        <div id={props.key}>  
            <p>{props.name} </p>
            <p>{props.brand} </p>
            <p>{props.image} </p>
            <p>{props.ingredients} </p>
            <p>{props.description} </p>
            <p>{props.size} </p>
            <p>{props.quantity} </p>
            <p>{props.reviews} </p>
            SINGLE PRODUCT RENDERED

        </div>
    )
}

export default ProductCard