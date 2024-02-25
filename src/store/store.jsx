import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import internshipsReducer from "./Reducers/internshipsSlice";
import jobsReducer from "./Reducers/jobsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    internships: internshipsReducer,
    jobs: jobsReducer,
  
  },
});
