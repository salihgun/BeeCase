import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isRefreshing: false,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUsers: (state, action) => {
      state.users = [...state.users, ...action.payload];
    },
    setIsRefreshing: (state, action) => {
      state.isRefreshing = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUsers, addUsers, setIsRefreshing} = userSlice.actions;

export default userSlice.reducer;
