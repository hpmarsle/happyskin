import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledDiv = styled.div`
  margin: 20px;
  padding: 10px;
  border: solid pink;
  text-align: center;
  display: inline-block;
  height: auto;
  width: auto;
  min-height: 500px;
  min-width: 350px;
  max-width: 1000px;
  max-height: 1000px;
  justify-content: center;
`
const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: auto;
  height: auto;
  min-height: 400px;
  max-width: 400px;
  max-height: 400px;
`

const ProductCard = (props) => {
  let avg_rating = (reviews) => {
    let mapped = reviews.map((r) => r['star_rating'])
    return Math.round(mapped.reduce((acc, n) => acc + n) / mapped.length)
  }

  return (
    <StyledDiv>
      <div id={props.id}>
        <Image src={props.image} alt='product pic' />
        <div> {props.name} </div>
        <div>{props.brand} </div>
        <div>${props.price}0 </div>

        <div>
          {props.reviews
            ? new Array(avg_rating(props.reviews)).fill(
                <FontAwesomeIcon icon='star' />
              )
            : 'No Reviews'}
        </div>
      </div>
    </StyledDiv>
  )
}

export default ProductCard
