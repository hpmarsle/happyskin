import React from 'react'

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