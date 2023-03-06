import {combineReducers, createStore} from "redux";
import dialogsReducer from "./reducers/dialogReducer";
import usersReducer from "./reducers/usersReducer";

let rootReducer = combineReducers({
    dialogsReducer,
    usersReducer
});

let redux_store = createStore(rootReducer);


export default redux_store;