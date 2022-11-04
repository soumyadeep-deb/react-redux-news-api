import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/dropdownMenu/dropdownMenuSlice";
import newsReducer from "../features/news/newsSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    news: newsReducer,
  },
});

export default store;
