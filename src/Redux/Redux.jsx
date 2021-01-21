import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import DataReducer from "./reducers/DataReducer";
import BasketReducer from "./reducers/BasketReducer";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


let reducers = combineReducers({
    DataReducer,
    BasketReducer,
});

const persistConfig = {
    key: 'BasketSlavaLobikovAleg',
    storage: storage,
    whitelist: ['BasketReducer'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, reducers);


/*
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
*/
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };



