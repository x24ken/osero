import { createSlice } from "@reduxjs/toolkit";
const PossibleCells = createSlice({
  name: "possibleCells",
  initialState: [],
  reducers: {
    possibleCellsUpdate(state, { type, payload }) {
      console.log(type, payload);
      return payload;
    },
    possibleCellsReset(state, { type, payload }) {
      console.log(type, payload);
      state = [];
    },
  },
});

const { possibleCellsUpdate, possibleCellsReset } = PossibleCells.actions;

export { possibleCellsUpdate, possibleCellsReset };
export default PossibleCells.reducer;
