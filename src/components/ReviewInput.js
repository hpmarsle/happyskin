import React from 'react'
import { addReview } from '../actions/reviews'
import { connect } from 'react-redux'

class ReviewInput extends React.Component {
    state = {
        star_rating: '',
        comments: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form>
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


export default connect(null, {addReview})(ReviewInput)