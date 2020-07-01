import React from 'react'

export default function Reviews(props) {
    return (
        <div>
            Reviews are rendering in the container.
            {props.reviews.map(review => 
                <div key={review.id}>
                    <div>
                        <div>{review.star_rating} </div>
                    </div>

                    <div>
                        <div>{review.comments} </div>
                    </div>
                </div>
            )}
        </div>
    )
}
 