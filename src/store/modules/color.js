import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turnColor: "black", // "black" or "white"
  userColor: null, // "black" or "white"
  cpuColor: null, // "black" or "white"
};

const color = createSlice({
  name: "color",
  initialState,
  reducers: {
    setTurnColor(state, { type, payload }) {
      state.turnColor = payload;
    },
    setUserColor(state, { type, payload }) {
      state.userColor = payload;
    },
    setCpuColor(state, { type, payload }) {
      state.cpuColor = payload;
    },
    resetInfo(state, { type, payload }) {
      return initialState;
    },
  },
});

const { setTurnColor, setUserColor, setCpuColor, resetInfo } = color.actions;
export { setTurnColor, setUserColor, setCpuColor, resetInfo };
export default color.reducer;
