import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'idle',
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.status = 'succeeded';
        },
        setError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
});

export const { setUser,setError } = userSlice.actions;
export const userReducer =userSlice.reducer;

