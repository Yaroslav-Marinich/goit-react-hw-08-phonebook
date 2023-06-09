import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    findContact(_, action) {
      return action.payload;
    },
  },
});

export const { findContact } = filterSlice.actions;

export default filterSlice.reducer;
