import React from 'react'
import { connect } from 'react-redux'
import { editReview } from '../actions/reviews'

class ReviewInputEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            star_rating: '',//set state to star_rating from div? pass as props? does it need to be an input, not a div?
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
        this.props.editReview(this.state.id, this.state.product_id, this.state)
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


export default connect(null, { editReview })(ReviewInputEdit)