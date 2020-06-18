// ASYNC action creator
export function fetchProducts() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_PRODUCTS' });
      fetch('http://localhost:3000/api/v1/products')
        .then(response => response.json())
        .then(products => dispatch({ type: 'DISPLAY_PRODUCTS', products })); //NEED TO MAKE REDUCER CASE FOR DISPLAY PRODUCTS AND SYNC ACTION CREATOR?
    };
  }
