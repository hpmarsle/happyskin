import React from 'react'


export default class ReviewInput extends React.Component {
    state = {
        star_rating: '',
        comments: ''
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Rating</label>
                    <input type="text"name="star_rating" value={this.state.star_rating} />
                    <label>Comments:</label>
                    <input type="textarea"name="comments" value={this.state.comments} />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
