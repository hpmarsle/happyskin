import React from 'react'
import { connect } from 'react-redux'
import { editReview } from '../actions/reviews'

class ReviewInputEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            star_rating: '',
            comments:'',
            id: props.match.params.reviewId,
            product_id: props.match.params.productId
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // props.editReview
        this.setState({
            star_rating: '',
            comments: ''
        })
        this.props.history.push(`/products/${this.state.product_id}`)

    }
    render() {

        return (
            <div>
                <h3>Edit Review</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Rating</label>
                    <input type="text"name="star_rating" value={this.state.star_rating} onChange={this.handleChange}/>
                    <label>Comments:</label>
                    <input type="textarea"name="comments" value={this.state.comments} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}


export default ReviewInputEdit