import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import {productReducer} from './productSlice';

const rootReducer = combineReducers({
    user: userReducer,
    userproduct:productReducer,
});

export default rootReducer;
