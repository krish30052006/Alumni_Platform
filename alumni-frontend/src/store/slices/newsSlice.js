import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [],
  loading: false,
  error: null,
  selectedNews: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
      state.loading = false;
      state.error = null;
    },
    addNews: (state, action) => {
      state.news.unshift(action.payload);
      state.loading = false;
      state.error = null;
    },
    updateNews: (state, action) => {
      const index = state.news.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.news[index] = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    deleteNews: (state, action) => {
      state.news = state.news.filter(item => item.id !== action.payload);
      state.loading = false;
      state.error = null;
    },
    setSelectedNews: (state, action) => {
      state.selectedNews = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearNews: (state) => {
      state.news = [];
      state.loading = false;
      state.error = null;
      state.selectedNews = null;
    },
  },
});

export const {
  setNews,
  addNews,
  updateNews,
  deleteNews,
  setSelectedNews,
  setLoading,
  setError,
  clearNews,
} = newsSlice.actions;

export default newsSlice.reducer; 