import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { status: '' },
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
