import { createAsyncThunk } from '@reduxjs/toolkit';
import { pageURL } from './baseURL';
import axios from 'axios';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`${pageURL(page)}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
