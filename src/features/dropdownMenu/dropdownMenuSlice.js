import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
};

const dropdownMenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    slected: (state, action) => {
      state.category = action.payload
        ? "category=" + action.payload + "&"
        : action.payload;
    },
  },
});

export default dropdownMenuSlice.reducer;
export const { slected } = dropdownMenuSlice.actions;
