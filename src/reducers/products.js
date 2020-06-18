export default (state = { products:[], loading: false }, action) => {
    switch(action.type) {
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                products: [...state.products],
                loading: true 

            }
        default:
            return state
    }
}