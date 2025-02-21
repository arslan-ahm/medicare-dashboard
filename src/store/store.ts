import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import patientsReducer from "./slices/patient.slice";
import tasksReducer from "./slices/task.slice";
import apponitmentReducer from "./slices/apponitment.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patients: patientsReducer,
    tasks: tasksReducer,
    apponitments: apponitmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
