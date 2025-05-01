import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import eventReducer from './slices/eventSlice';
import newsReducer from './slices/newsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    events: eventReducer,
    news: newsReducer,
  },
}); 