import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviews'
import { Link } from 'react-router-dom'


class Review extends React.Component {

    render() {
        const {id, star_rating, comments, productId, deleteReview} = this.props

        return (           
            <div id={id}>
                <div>
                    <div className='star_rating'>{star_rating} </div>
                </div>
    
                <div>
                    <div className='comments'>{comments} </div>
                </div>
                {/*<button onClick={event =>  window.location.href=`/products/${productId}/reviews/${id}`}>Edit</button>*/}
                <Link to={{
                    pathname: `/products/${productId}/reviews/${id}`,
                    state: { star_rating, comments }
                }}>
                    Edit
                </Link>
                <button onClick={() => deleteReview(id, productId)}>Delete</button>
                <br /><br />
            </div>
        )
    }
}

export default connect(null, {deleteReview})(Review)

