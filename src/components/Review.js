import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviews'

function Review({id, star_rating, comments, productId, deleteReview}) {

    return (
        <div id={id}>
            <div>
                <div className='star_rating'>{star_rating} </div>
            </div>

            <div>
                <div className='comments'>{comments} </div>
            </div>
            <button onClick={event =>  window.location.href=`/products/${productId}/reviews/${id}`}>Edit</button>
            <button onClick={() => deleteReview(id, productId)}>Delete</button>
            <br /><br />
        </div>
    )
}

export default connect(null, {deleteReview})(Review)

