import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from './carsSlice';

export const store = configureStore({
  reducer: {
    cars: Reducer,
  },
});
