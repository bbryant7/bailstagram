// create root reducer; Redux can only have one reducer. We make as many reducers as we have state changes and then combine them into a root reducer redux can use.

import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import posts from "./post";
import comments from "./comments";

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
