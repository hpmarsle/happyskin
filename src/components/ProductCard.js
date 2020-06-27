import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin: 20px;
    padding: 10px;
    border: solid pink;
    text-align: center;

`
const Image = styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
`

const ProductCard = (props) => {
    return (
        <StyledDiv>
            <div id={props.key} >  
                <Image src={props.image} alt="product pic"/>
                <div> {props.name} </div>
                <p>{props.brand} </p>
                <p>{props.ingredients} </p>
                <p>{props.description} </p>
                <p>{props.size} </p>
                <p>{props.quantity} </p>
                <p>{props.reviews} </p>
                SINGLE PRODUCT RENDERED

            </div>
        </StyledDiv>
    )
}

export default ProductCard