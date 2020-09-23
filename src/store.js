import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk  from 'redux-thunk';
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import products from './reducers/products'
import reviews from './reducers/reviews'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  users,
  currentUser,
  products,
  reviews
})

const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;