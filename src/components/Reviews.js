import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviews'

function Reviews(props) {
    const handleDelete = (reviewId, productId) => {
        props.deleteReview(reviewId, productId)
    }
    if (props.reviews  === undefined || props.reviews  == 0) {
        return (<h3>No Reviews</h3>)
    } else {

        return (
            <div>
                Reviews are rendering in the container.
                {props.reviews && props.reviews.map(review => 
                    <div key={review.id}>
                        <div>
                            <div>{review.star_rating} </div>
                        </div>
    
                        <div>
                            <div>{review.comments} </div>
                        </div>
                        <button onClick={() => handleDelete(review.id, review.product_id)}>Delete</button>
                    </div>
                )}
            </div>
        )
    }
}
 
export default connect(null, {deleteReview})(Reviews)