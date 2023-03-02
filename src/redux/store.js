import {combineReducers, createStore} from "redux";
import dialogsReducer from "./reducers/dialogReducer";

let reducers = combineReducers({
    dialogsReducer
});

let store = createStore(reducers);


export default store;