import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeDestinaton: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  setOrigin: (state, action) => {
    state.origin = action.payload;
  },
  setDestination: (state, action) => {
    state.destination = action.payload;
  },
  setTravelTimeDestination: (state, action) => {
    state.origin = action.payload;
  },
});

export const { setOrigin, setDestination, setTravelTimeDestination } =
  navSlice.actions;

export default navSlice.reducer;
