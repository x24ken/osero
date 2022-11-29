import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blackCount: 2,
  whiteCount: 2,
  nullCount: 60,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounter(state, { type, payload }) {
      state.blackCount = Counter(payload.board, "black");
      state.whiteCount = Counter(payload.board, "white");
      state.nullCount = Counter(payload.board, null);
    },
  },
});

const { setCounter } = counter.actions;
export { setCounter };
export default counter.reducer;

// ヘルパー関数
const Counter = (board, value) => {
  let count = 0;
  board.forEach((row) =>
    row.forEach((cell) => {
      if (cell === value) {
        ++count;
      }
    })
  );
  return count;
};
