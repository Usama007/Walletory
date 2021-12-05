import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import loginSlice from './loginSlice'
import dataSlice from './dataSlice'
import registerSlice from './registerSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['data','login']
};

const reducers = combineReducers({
    login: loginSlice,
    data: dataSlice,
    register: registerSlice,
});


const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

const persistor = persistStore(store);
export { store, persistor };


