import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  loading: false,
  error: null,
  selectedEvent: null,
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
      state.loading = false;
      state.error = null;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    updateEvent: (state, action) => {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
      state.loading = false;
      state.error = null;
    },
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearEvents: (state) => {
      state.events = [];
      state.loading = false;
      state.error = null;
      state.selectedEvent = null;
    },
  },
});

export const {
  setEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  setSelectedEvent,
  setLoading,
  setError,
  clearEvents,
} = eventSlice.actions;

export default eventSlice.reducer; 