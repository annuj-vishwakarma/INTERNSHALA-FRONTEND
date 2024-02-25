// internshipsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    jobsFound(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    jobdetail(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    createdjob(state, action) {
      state.data = action.payload;
      state.error = null;
    },
  },
});

export const { jobsFound,jobdetail,createdjob} = jobsSlice.actions;
export default jobsSlice.reducer;
