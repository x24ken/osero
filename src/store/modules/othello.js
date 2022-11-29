import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, "black", "white", null, null, null],
    [null, null, null, "white", "black", null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ],
  possibleBlack: [], //blackのターンになるたびにuseEffectでsetしていけばいいのでは？
  possibleWhite: [],
};

// payloadに流れてくるのはマス目の値の配列
// 例: [0, 0] or [3,4]
const othello = createSlice({
  name: "othello",
  initialState,
  reducers: {
    changeBlack(state, { type, payload }) {
      console.log(type, payload);
      state.board = [
        ...state.board,
        (state.board[payload[0]][payload[1]] = "black"),
      ];
    },
    changeWhite(state, { type, payload }) {
      console.log(type, payload);
      state.board = [
        ...state.board,
        (state.board[payload[0]][payload[1]] = "white"),
      ];
    },
    othelloReset(state, { type, payload }) {
      // 初期ステータスにするときはreturnでいい
      console.log(type, payload);
      return initialState;
    },
  },
});

const { changeBlack, changeWhite, othelloReset } = othello.actions;
export { changeBlack, changeWhite, othelloReset };
export default othello.reducer;
