import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
  (<Router>
    <div>
      <Provider store={store}>
        <Route path="/" component={App}/> 
      </Provider>
    </div>
  </Router>),

  document.getElementById('root')
);