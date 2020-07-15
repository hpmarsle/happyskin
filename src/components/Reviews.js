import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviews'
import styled from 'styled-components'


const StyledDiv = styled.div`
    margin: 20px;
    padding: 10px;
    border: solid pink;

    height: auto;
    width: auto;

`

function Reviews(props) {
    const handleDelete = (reviewId, productId) => {
        props.deleteReview(reviewId, productId)
    }

    if (props.reviews  === undefined || props.reviews  === 0) {
        return (<h3>No Reviews</h3>)
    } else {
        return (
            <StyledDiv>
                <h3>REVIEWS</h3>
                {props.reviews && props.reviews.map(review => 
                    <div key={review.id}>
                        <div>
                            <div class='star_rating'>{review.star_rating} </div>
                        </div>
    
                        <div>
                            <div class='comments'>{review.comments} </div>
                        </div> {/*How do I pass this info as props to pre-fill the edit form?*/}
                        <button onClick={event =>  window.location.href=`/products/${review.product_id}/reviews/${review.id}`}>Edit</button>
                        <button onClick={() => handleDelete(review.id, review.product_id)}>Delete</button>
                        <br /><br />
                    </div>
                )}
            </StyledDiv>
        )
    }
}
 
export default connect(null, {deleteReview})(Reviews)