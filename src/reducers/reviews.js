export default (state = { reviews:[], loading: false }, action) => {
    
    switch(action.type) {

            /*return {
                ...state,
                reviews: [...state.reviews, action.review],
                loading: true
            }*/
        
        default:
            return state
    }
}