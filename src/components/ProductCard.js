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
            <div id={props.id} >  
                <Image src={props.image} alt="product pic"/>
                <div> {props.name} </div>
                <div>{props.brand} </div>
                <div>${props.price} </div>
                <div>{props.reviews} </div>

            </div>
        </StyledDiv>
    )
}

export default ProductCard