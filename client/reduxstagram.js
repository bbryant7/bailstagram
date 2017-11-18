
import React from 'react';
import { render } from 'react-dom';
// Import css, webpack handles all css loading
import css from './styles/style.styl';
// Import Components
import Main from './components/Main';
import Single from './components/SinglePost';
import PhotoGrid from './components/Grid';
// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';



render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/views/:postId" component={Single}></Route>
    </Route>
  </Router>
, document.getElementById('root'));
