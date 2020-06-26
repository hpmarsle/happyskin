export default (state = { products:[], loading: false }, action) => {
     
    switch(action.type) {
        case 'LOADING_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                loading: true
            }
        case 'DISPLAY_PRODUCTS':
            return {
                ...state,
                products: action.products, 
                loading: false
            }
        default:
            return state
    }
}