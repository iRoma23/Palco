import { createSlice } from '@reduxjs/toolkit';

export const roleSlice = createSlice({
  name: 'role',
  initialState: 'VISITANTE',
  reducers: {
    filterRole: (state, action) => {
      return state = action.payload
    }
  }
});

export const { filterRole } = roleSlice.actions;

// export const selectUser = (state) => state.user.user;

export default roleSlice.reducer;