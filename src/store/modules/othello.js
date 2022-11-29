import { createSlice } from "@reduxjs/toolkit";
import { checkPossibleReturnOthelloArray } from "../../helpers/OthelloHelper";

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
  possibleCells: [
    [
      [2, 4],
      [3, 4],
    ],
    [
      [3, 5],
      [3, 4],
    ],
    [
      [4, 2],
      [4, 3],
    ],
    [
      [5, 3],
      [4, 3],
    ],
  ], //blackのターンになるたびにuseEffectでsetしていけばいいのでは？
};

// payloadに流れてくるのはマス目の値の配列
// 例: [0, 0] or [3,4]
const othello = createSlice({
  name: "othello",
  initialState,
  reducers: {
    changeCell(state, { type, payload }) {
      const { cell, color } = payload;
      state.board[cell[0]][cell[1]] = color;
    },
    updatePossibleCells(state, { type, payload }) {
      state.possibleCells = checkPossibleReturnOthelloArray(
        state.board,
        payload.color === "black"
      );
    },
    othelloReset(state, { type, payload }) {
      // 初期ステータスにするときはreturnでいい
      return initialState;
    },
  },
});

const { changeCell, othelloReset, updatePossibleCells } = othello.actions;
export { changeCell, othelloReset, updatePossibleCells };
export default othello.reducer;
