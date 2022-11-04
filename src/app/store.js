import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/dropdownMenu/dropdownMenuSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;
