import React, { Component } from 'react'
import Reviews from '../components/Reviews'


class ReviewsContainer extends Component {

    render() {
        return (
            <div>
                <Reviews reviews={this.props.product && this.props.product.reviews} />
            </div>
        )
    }


}

export default ReviewsContainer