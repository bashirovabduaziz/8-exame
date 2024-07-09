import { createSlice } from '@reduxjs/toolkit';

export const comparisonSlice = createSlice({
  name: 'comparison',
  initialState: {
    value: JSON.parse(localStorage.getItem('comparison')) || [],
  },
  reducers: {
    toggleToComparison(state, { payload }) {
      let index = state.value.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        state.value = [...state.value, payload];
      } else {
        state.value = state.value.filter((el) => el.id !== payload.id);
      }
      localStorage.setItem('comparison', JSON.stringify(state.value));
    },
  },
});

export const { toggleToComparison } = comparisonSlice.actions;

export default comparisonSlice.reducer;
