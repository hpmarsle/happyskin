export default (state = { products:[], loading: false }, action) => {
     
    switch(action.type) {
        case 'LOADING_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                loading: true
            }

        case 'ADD_REVIEW':
        
            let products = state.products.map(product => {
                if (product.id == action.payload.id) {
                    return action.payload
                } else {
                    return product 
                }
            })
            return {...state, products: products}
        
        case 'DELETE_REVIEW':
            let productsRevised = state.products.map(product => {
                if (product.id == action.payload.id) {
                    return action.payload
                } else {
                    return product 
                }
            })

            return {...state, products: productsRevised}
        case 'EDIT_REVIEW':
            let products2 = state.products.map(product => {
                if (product.id == action.payload.id) {
                    return action.payload
                } else {
                    return product
                }
            })
            return {...state, products: products2} 
        default:
            return state
    }
}