import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from "./reducers/index";
import comments from "./data/comments"
import posts from "./data/posts"


// ------
// new es6 if key and property are the same, can do "posts" instead of 'posts: "posts"'
const defaultstate = {
  posts,
  comments
};

export const store = createStore(rootReducer, defaultstate);

export const history = syncHistoryWithStore(browserHistory, store);

// export default store;
