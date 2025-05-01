import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
      state.loading = false;
      state.error = null;
    },
    clearProfile: (state) => {
      state.profile = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setProfile, setLoading, setError, updateProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer; 