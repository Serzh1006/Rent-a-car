import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './baseURL';

export const getDataLength = createAsyncThunk(
  'cars/getData',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/adverts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
