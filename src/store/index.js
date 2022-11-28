import { configureStore } from "@reduxjs/toolkit";
import othelloReducer from "./modules/othello";

export default configureStore({
  reducer: {
    othelloReducer,
  },
});
