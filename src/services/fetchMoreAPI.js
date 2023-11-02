import { createAsyncThunk } from '@reduxjs/toolkit';
import { pageURL } from './baseURL';
import axios from 'axios';

export const fetchNextPage = createAsyncThunk(
  'cars/nextPage',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    let page = state.cars.cars.page;
    page += 1;
    try {
      const response = await axios.get(`${pageURL(page)}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
