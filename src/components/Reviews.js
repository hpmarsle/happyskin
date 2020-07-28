import React from 'react'
import styled from 'styled-components'
import Review from './Review'

const StyledDiv = styled.div`
    margin: 20px;
    padding: 10px;
    border: solid pink;

    height: auto;
    width: auto;

`

function Reviews(props) {
    
    if (props.reviews  === undefined || props.reviews  === 0) {
        return (<h3>No Reviews</h3>)
    } else {
        return (
            <StyledDiv>
                <h3>REVIEWS</h3>
                {props.reviews && props.reviews.map(review => 
                    <Review id={review.id} star_rating={review.star_rating} comments={review.comments} productId={review.product_id}/>

                    
                )}
            </StyledDiv>
        )
    }
}
 export default Reviews