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
    comments: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.star_rating === '' || this.state.comments === '') {
      alert('Please fill out both fields')
    } else {
      this.props.addReview(this.state, this.props.product.id)
      this.setState({
        star_rating: '',
        comments: '',
      })
    }
  }

  render() {
    return (
      <StyledDiv>
        <h3>Leave a Review</h3>
        <form onSubmit={this.handleSubmit}>
          <select
            id='star_rating'
            name='star_rating'
            value={this.state.star_rating}
            onChange={this.handleChange}
          >
            <option selected value=''>
              Please rate 1-5 stars.
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <label for='comments'>Comments</label>
          <textarea
            type='text'
            name='comments'
            value={this.state.comments}
            onChange={this.handleChange}
          />
          <div className='formButton'>
            <input type='submit' />
          </div>
        </form>
      </StyledDiv>
    )
  }
}

export default connect(null, { addReview })(ReviewInput)
