import React, { Component } from 'react'
import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

    render() {
        return (
            <div>
                <h3>Reviews Container</h3>
                <ReviewInput />
                <Reviews reviews={this.props.product && this.props.product.reviews} />
            </div>
        )
    }


}

const mapDispatchToProps = dispatch => {
    addReview: (review) => dispatch({type: 'ADD_REVIEW', review})
}

export default connect(null, mapDispatchToProps)(ReviewsContainer)