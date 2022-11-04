import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const category = useSelector((state) => state.menu.category);

// Generates pending, fulfilled and rejected action types
export const fetchPosts = createAsyncThunk('newsList/fetchPosts', () => {
    return axios
      .get('https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=03040e2bb8f04361beda92c70cfb1db5')
      .then(response => response.data)
  })