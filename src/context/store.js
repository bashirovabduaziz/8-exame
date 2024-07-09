import { configureStore } from '@reduxjs/toolkit';
import wishlistSlice from './wishlistSlice';
import cartSlice from './cartSlice';
import comparisonSlice from './comparisonSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice,
    comparison: comparisonSlice
  },
});
