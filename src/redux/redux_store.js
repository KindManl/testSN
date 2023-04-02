import {combineReducers, createStore} from "redux";
import dialogsReducer from "./reducers/dialogReducer";
import usersReducer from "./reducers/usersReducer";
import friendsReducer from "./reducers/friendsReducer";

let rootReducer = combineReducers({
    dialogsReducer,
    usersReducer,
    friendsReducer
});

let redux_store = createStore(rootReducer);


export default redux_store;