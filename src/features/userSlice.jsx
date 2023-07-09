import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null, 
    isLoading: true,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
            // state.isLoading = false;
        },
        logOutUser: (state) => {
            state.user = null;
            // state.isLoading = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;

        }
    }

})

export const { loginUser, logOutUser, setLoading } = userSlice.actions;