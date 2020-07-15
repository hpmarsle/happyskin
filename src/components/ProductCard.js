import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin: 20px;
    padding: 10px;
    border: solid pink;
    text-align: center;
    float: left;
    height: auto;
    width: auto;
    max-width: 1000px;
    max-height: 1000px;

`
const Image = styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: auto;
    height: auto;
    max-width: 400px;
    max-height: 400px;
    
`

const ProductCard = (props) => {
    return (
        <StyledDiv>
            <div id={props.id} >  
                <Image src={props.image} alt="product pic"/>
                <div> {props.name} </div>
                <div>{props.brand} </div>
                <div>${props.price}0 </div>
                <div>{props.reviews.length >= 1 ? props.reviews[0].star_rating : "No Reviews"} </div>

            </div>
        </StyledDiv>
    )
}

export default ProductCard