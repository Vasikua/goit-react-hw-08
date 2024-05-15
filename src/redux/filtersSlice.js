import { createSlice } from '@reduxjs/toolkit';
export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      console.log(action.payload)
      state.name = action.payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
export const selectNameFilter = state => state.filters.name;
