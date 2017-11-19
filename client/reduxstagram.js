
import React from 'react';
import { render } from 'react-dom';
// Import css, webpack handles all css loading
import css from './styles/style.styl';
// Import Components
import App from './components/App';
import Single from './components/SinglePost';
import PhotoGrid from './components/Grid';
// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
// use {} for named exports, defaults don't need it
import {store, history} from "./store";



render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/views/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));
