import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'userproduct',
    initialState: {
        product: [],
        status: 'idle',
        error: null
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
            state.status = 'succeeded';
        },
        setError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
});

export const { setProduct,setError } = productSlice.actions;
export const productReducer =productSlice.reducer;