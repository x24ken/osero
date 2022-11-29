import { configureStore } from "@reduxjs/toolkit";
import othello from "./modules/othello";
import info from "./modules/info";

export default configureStore({
  reducer: {
    othello,
    info,
  },
});
