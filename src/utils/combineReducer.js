import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import {productReducer} from './productSlice';
import { orderReducer } from './orderSlice';
const rootReducer = combineReducers({
    user: userReducer,
    userproduct:productReducer,
    userorder:orderReducer,

});

export default rootReducer;
