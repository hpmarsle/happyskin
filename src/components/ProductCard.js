import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
    background: pink;
    font-size: 2em;
`

const ProductCard = (props) => {
    return (
        <div id={props.key} >  
            <Paragraph>{props.name} </Paragraph>
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