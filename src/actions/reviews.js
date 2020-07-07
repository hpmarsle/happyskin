export const addReview = (review, productId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/products/${productId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(response => response.json())
        .then(review => dispatch({
            type: 'ADD_REVIEW', 
            review
        }));
    }
}