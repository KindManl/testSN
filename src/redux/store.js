import {combineReducers, createStore} from "redux";
import addPost from "./reducers/addPost";



let reducers = combineReducers({
    addPost
});

let store = createStore(reducers);



export default store;