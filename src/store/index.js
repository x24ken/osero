import { configureStore } from "@reduxjs/toolkit";
import othello from "./modules/othello";
import color from "./modules/color";
import counter from "./modules/counter";

export default configureStore({
  reducer: {
    othello,
    color,
    counter,
  },
});
