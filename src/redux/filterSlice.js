import { createSlice } from '@reduxjs/toolkit';

const filterState = {
  filterCars: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    filterByName(state, action) {
      state.filterCars = action.payload;
    },
  },
});

export const { filterByName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
