import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.cars.cars.items;
export const selectPage = state => state.cars.cars.page;
export const selectCount = state => state.cars.cars.countData;
export const selectFavorites = state => state.favorites.favorites;
export const selectFilter = state => state.filter.filterCars;

export const visibleItems = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    return items.filter(obj =>
      obj.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const visibleFavorites = createSelector(
  [selectFavorites, selectFilter],
  (favitems, filter) => {
    return favitems.filter(obj =>
      obj.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
