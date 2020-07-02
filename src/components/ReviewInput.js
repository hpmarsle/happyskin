import React from 'react'


export default class ReviewInput extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>Rating</label>
                    <input type="text"/>
                    <label>Comments:</label>
                    <input type="textarea"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
