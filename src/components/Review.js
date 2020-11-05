import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviews'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'

function Review({ id, star_rating, comments, productId, deleteReview }) {
  // const [reviewStars, setStars] = useState(star_rating)
  // const [reviewComments, setComments] = useState(comments)

  return (
    <div id={id}>
      <div>
        <div className='star_rating'>
          {new Array(star_rating).fill(<FontAwesomeIcon icon='star' />)}
        </div>
      </div>

      <div>
        <div className='comments'>{comments} </div>
      </div>
      {/*<button onClick={event =>  window.location.href=`/products/${productId}/reviews/${id}`}>Edit</button>*/}

      <Button
        variant='outlined'
        color='primary'
        size='small'
        onClick={(event) =>
          (window.location.href = `/products/${productId}/reviews/${id}`)
        }
        star_rating={star_rating}
        comments={comments}
      >
        Edit
      </Button>
      <Button
        variant='outlined'
        color='primary'
        onClick={() => deleteReview(id, productId)}
        size='small'
      >
        Delete
      </Button>
      <br />
      <br />
    </div>
  )
}

export default connect(null, { deleteReview })(Review)
