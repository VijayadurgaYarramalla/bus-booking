import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buses: [
    { id: 1, name: "Orange Travels", price: 500 },
    { id: 2, name: "VRL Travels", price: 700 },
    { id: 3, name: "SRS Travels", price: 600 },
  ],
  selectedBus: null,
  selectedSeats: [],
};

const busSlice = createSlice({
  name: "bus",
  initialState,
  reducers: {
    selectBus: (state, action) => {
      state.selectedBus = action.payload;
      state.selectedSeats = [];
    },
    toggleSeat: (state, action) => {
      const seat = action.payload;
      if (state.selectedSeats.includes(seat)) {
        state.selectedSeats = state.selectedSeats.filter(
          (s) => s !== seat
        );
      } else {
        state.selectedSeats.push(seat);
      }
    },
  },
});

export const { selectBus, toggleSeat } = busSlice.actions;
export default busSlice.reducer;