import React from 'react'
import { addReview } from '../actions/reviews'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin: 2em;
    padding: 1em;
    border: solid pink;
    height: auto;
    width: auto;

`
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

    handleSubmit = (event) => {
        event.preventDefault()

        if (this.state.star_rating === "" || this.state.comments === "") {
            alert("Please fill out both fields");
        } else {
            this.props.addReview(this.state, this.props.product.id)
            this.setState({
                star_rating: '',
                comments: ''
            })
        }

    }
    
    render() {
        return (
            <StyledDiv>
                <h3>Leave a Review</h3>
                <form onSubmit={this.handleSubmit}>  
                    <label for="star_rating">Rating</label>
                    <input 
                        type="text"
                        name="star_rating" 
                        value={this.state.star_rating} 
                        onChange={this.handleChange} 
                        placeholder="please type 1-5 stars"
                    />
                
                    <label for="comments">Comments</label>
                    <textarea type="text"name="comments" value={this.state.comments} onChange={this.handleChange}/>
                    <div className="formButton">
                        <input type="submit"/>
                    </div>
                </form>
            </StyledDiv>
        )
    }
}


export default connect(null, {addReview})(ReviewInput)