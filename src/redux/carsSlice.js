import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../services/fetchCarsAPI';
import { fetchNextPage } from '../services/fetchMoreAPI';
import { getDataLength } from '../services/getDataLength';

const carsState = {
  cars: {
    items: [],
    isLoading: false,
    error: null,
    countData: 0,
  },
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.cars.isLoading = true;
        state.cars.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars.isLoading = false;
        state.cars.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = action.payload;
      })
      .addCase(fetchNextPage.pending, state => {
        state.cars.isLoading = true;
        state.cars.error = null;
      })
      .addCase(fetchNextPage.fulfilled, (state, action) => {
        state.cars.isLoading = false;
        state.cars.items.push(...action.payload);
      })
      .addCase(fetchNextPage.rejected, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = action.payload;
      })
      .addCase(getDataLength.pending, state => {
        state.cars.isLoading = true;
        state.cars.error = null;
      })
      .addCase(getDataLength.fulfilled, (state, action) => {
        state.cars.isLoading = false;
        state.cars.countData = action.payload.length;
      })
      .addCase(getDataLength.rejected, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = action.payload;
      });
  },
});

export const Reducer = carsSlice.reducer;
