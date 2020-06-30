import React, { Component } from 'react'
import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'

export default class ReviewsContainer extends Component {
    render() {
        return (
            <div>
                Reviews Container
                <ReviewInput />
                <Reviews />
            </div>
        )
    }
}
