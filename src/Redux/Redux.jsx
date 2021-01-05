import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import DataReducer from "./reducers/DataReducer";


let reducers = combineReducers({
    DataReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
