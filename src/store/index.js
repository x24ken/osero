import { configureStore } from "@reduxjs/toolkit";
import othello from "./modules/othello";
import possibleCells from "./modules/possibleCells";
import info from "./modules/info";

export default configureStore({
  reducer: {
    othello,
    possibleCells,
    info,
  },
});
