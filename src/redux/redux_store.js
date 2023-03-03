import {combineReducers, createStore} from "redux";
import dialogsReducer from "./reducers/dialogReducer";
import peopleReducer from "./reducers/usersReducer";

let rootReducer = combineReducers({
    dialogsReducer,
    peopleReducer
});

let redux_store = createStore(rootReducer);


export default redux_store;