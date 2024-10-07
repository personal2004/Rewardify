import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './combineReducer';

const store = configureStore({
    reducer: rootReducer 
});

export default store;
