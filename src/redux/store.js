import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import studentInfoReducer from "./reducers/studentInfoReducer";
import addCommentReducer from "./reducers/addCommentReducer";



const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    info: studentInfoReducer,
    comment: addCommentReducer,
});


const composeEnhancer = 
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
        : compose;

 const enhancer = composeEnhancer(applyMiddleware(...middleware));
 const store = createStore(reducers, initialState, enhancer );

 export default store;