// ASYNC action creator
export function fetchProducts() {
  
  return (dispatch) => {
    
    fetch('http://localhost:3000/api/v1/products')
    .then(response => response.json())
    .then(productData => dispatch({
      type: 'LOADING_PRODUCTS', 
      payload: productData
    }));
  };
}
