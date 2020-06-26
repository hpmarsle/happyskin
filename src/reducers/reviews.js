export default (state = { reviews:[], loading: false }, action) => {
     
    switch(action.type) {
        case 'LOADING_REVIEWS':
            return {
                ...state,
                reviews: action.reviews,
                loading: true
            }
        case 'DISPLAY_REVIEWS':
            return {
                ...state,
                reviews: action.reviews, 
                loading: false
            }
        default:
            return state
    }
}