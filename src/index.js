import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/navigation/About'
import Login from './components/navigation/Login'
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
  (<Router>
    <div>
      <Provider store={store}>
        <Route path="/" component={App}/> 
        <Route path="/about" component={About}/> 
        <Route path="/login" component={Login}/> 
      </Provider>
    </div>
  </Router>),

  document.getElementById('root')
);