import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import React from "react";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const front = "https://newsapi.org/v2/top-headlines/sources?";
const apiKey = "apiKey=03040e2bb8f04361beda92c70cfb1db5";

// Generates pending, fulfilled and rejected action types
export const fetchPosts = createAsyncThunk("news/fetchPosts", () => {
  //const category = useSelector((state) => state.menu.category);
  const category = "";
  const completeUrl = front + category + apiKey;
  console.log(completeUrl);
  return axios.get(completeUrl).then((res) => res.data.sources);
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default newsSlice.reducer;
