import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'userorder',
    initialState: {
        orders: [],
        status: 'idle',
        error: null
    },
    reducers: {
        setorders: (state, action) => {
            state.product = action.payload;
            state.status = 'succeeded';
        },
        setError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
});

export const { setorders,setError } = orderSlice.actions;
export const orderReducer =orderSlice.reducer;