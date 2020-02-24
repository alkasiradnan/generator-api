import { createStore } from "redux";
import createReducer from "./reducer/createReducer";

function configureStore(state = { user: true }) {
    console.log("im in store..");
    
    return createStore(createReducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default configureStore;