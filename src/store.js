import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import products from './reducers/products'
import signupForm from './reducers/signupForm'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  users,
  currentUser,
  loginForm,
  signupForm,
  products,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
