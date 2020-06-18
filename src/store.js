import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk  from 'redux-thunk';
import productsReducer from './reducers/products'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    productsReducer//,
    //reviewsReducer
  })

const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;