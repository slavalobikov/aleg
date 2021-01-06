import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import DataReducer from "./reducers/DataReducer";
import BasketReducer from "./reducers/BasketReducer";


let reducers = combineReducers({
    DataReducer,
    BasketReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
