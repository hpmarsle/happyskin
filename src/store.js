import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk  from 'redux-thunk';
import products from './reducers/products'
import reviews from './reducers/reviews'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  products,
  reviews
})

const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;