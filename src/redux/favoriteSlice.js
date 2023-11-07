import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const carsFavState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: carsFavState,
  reducers: {
    addFavCard(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavCard(state, action) {
      const findIndexCar = state.favorites.findIndex(
        obj => obj.id === action.payload
      );
      console.log('index', findIndexCar);
      state.favorites.splice(findIndexCar, 1);
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  favoriteSlice.reducer
);

export const { addFavCard, removeFavCard } = favoriteSlice.actions;
