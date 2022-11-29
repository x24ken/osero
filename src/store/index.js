import { configureStore } from "@reduxjs/toolkit";
import othelloReducer from "./modules/othelloReducer";

export default configureStore({
  reducer: {
    othello: othelloReducer,
  },
});
